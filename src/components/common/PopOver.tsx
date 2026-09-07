import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useScrollLock } from '../../hooks';

type OriginX = 'left' | 'center' | 'right';
type OriginY = 'top' | 'center' | 'bottom';

interface Origin {
  vertical: OriginY;
  horizontal: OriginX;
}

interface PopOverProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
  anchorOrigin?: Origin;
  transformOrigin?: Origin;
  additionalClass?: string;
  children: React.ReactNode;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const GAP = 8;

/**
 * Composant PopOver - se rapproche du Popover de Material UI.
 *
 * - Rendu en `position: fixed` dans un Portal (document.body) : reste collé à l'ancre au scroll
 * - Backdrop plein écran : bloque toute interaction avec la page tant que la popover est ouverte
 * - Verrouillage du scroll (molette/tactile/clavier) sans masquer la barre de défilement du navigateur
 * - Positionné dynamiquement par rapport à `anchorEl` (comme anchorEl/anchorOrigin/transformOrigin de MUI)
 * - La position est calculée avant le premier paint (useLayoutEffect) : pas de flash ni de glissement
 * - Détection de collision avec le viewport (flip si ça dépasse)
 * - Recalcul de la position au resize
 * - Focus trap (Tab reste dans la popover) + restauration du focus à la fermeture
 *
 * @returns {JSX.Element | null}
 */
const PopOver = ({
  open,
  anchorEl,
  onClose,
  anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
  transformOrigin = { vertical: 'top', horizontal: 'right' },
  additionalClass = '',
  children,
}: PopOverProps): React.JSX.Element | null => {
  const popOverRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const [rendered, setRendered] = useState(open);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useScrollLock(open);

  const computePosition = useCallback(() => {
    if (!anchorEl || !popOverRef.current) return;

    const anchorRect = anchorEl.getBoundingClientRect();
    const popRect = popOverRef.current.getBoundingClientRect();
    const { innerWidth, innerHeight } = window;

    let top =
      anchorOrigin.vertical === 'top'
        ? anchorRect.top
        : anchorOrigin.vertical === 'center'
          ? anchorRect.top + anchorRect.height / 2
          : anchorRect.bottom;

    let left =
      anchorOrigin.horizontal === 'left'
        ? anchorRect.left
        : anchorOrigin.horizontal === 'center'
          ? anchorRect.left + anchorRect.width / 2
          : anchorRect.right;

    if (transformOrigin.vertical === 'center') top -= popRect.height / 2;
    if (transformOrigin.vertical === 'bottom') top -= popRect.height;
    if (transformOrigin.horizontal === 'center') left -= popRect.width / 2;
    if (transformOrigin.horizontal === 'right') left -= popRect.width;

    if (anchorOrigin.vertical === 'bottom' && transformOrigin.vertical === 'top') top += GAP;
    if (anchorOrigin.vertical === 'top' && transformOrigin.vertical === 'bottom') top -= GAP;

    if (left + popRect.width > innerWidth) left = innerWidth - popRect.width - GAP;
    if (left < GAP) left = GAP;
    if (top + popRect.height > innerHeight) top = anchorRect.top - popRect.height - GAP;
    if (top < GAP) top = GAP;

    setPosition((prev) => (prev.top === top && prev.left === left ? prev : { top, left }));
  }, [anchorEl, anchorOrigin, transformOrigin]);

  useEffect(() => {
    setRendered(open);
  }, [open]);

  useLayoutEffect(() => {
    if (!rendered) return;
    computePosition();
  }, [rendered, computePosition]);

  useEffect(() => {
    if (!rendered) return;
    window.addEventListener('resize', computePosition);
    return () => {
      window.removeEventListener('resize', computePosition);
    };
  }, [rendered, computePosition]);

  useEffect(() => {
    if (!rendered) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key === 'Tab' && popOverRef.current) {
        const focusables = popOverRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [rendered, onClose]);

  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement as HTMLElement;
      requestAnimationFrame(() => {
        const first = popOverRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
        first?.focus();
      });
    } else {
      previouslyFocused.current?.focus();
    }
  }, [open]);

  if (!rendered) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />

      <div
        ref={popOverRef}
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed',
          top: position.top,
          left: position.left,
        }}
        className={`z-50 bg-foreground border border-divider shadow-2xl ${additionalClass}`}
      >
        {children}
      </div>
    </>,
    document.body,
  );
};

export default PopOver;
