import { useEffect, useRef, useState } from 'react';
import { AppIconSvg } from '@app-portfolio/enums';

import Icon from '../../common/icon/Icon';
import PopOver from '../../common/PopOver';
import NavbarOptionList from './NavbarOptionList';
import ResumeDownloadModal from './ResumeDownloadModal';

/**
 * Bouton options mobile (menu hamburger) : regroupe le réglage du thème (switch)
 * et le téléchargement du CV dans un popover, pour libérer de l'espace aux liens de la barre de navigation.
 * Le téléchargement du CV s'ouvre en modal centrée (variant "modal"), pas en popover imbriqué.
 * @returns {JSX.Element}
 */
const NavbarOptions = (): React.JSX.Element => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) setIsDownloadOpen(false);
  }, [isOpen]);

  return (
    <div ref={anchorRef} className="relative z-30 flex items-center h-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Options"
        aria-expanded={isOpen}
        className="rounded-full cursor-pointer transition-colors duration-200 hover:text-primary"
      >
        <Icon name={AppIconSvg.MENU} size="24" color="var(--text-primary)" />
      </button>

      <PopOver
        open={isOpen}
        anchorEl={anchorRef.current}
        onClose={() => setIsOpen(false)}
        additionalClass="min-w-56"
      >
        <NavbarOptionList onDownload={() => setIsDownloadOpen(true)} />

        <ResumeDownloadModal
          variant="modal"
          open={isDownloadOpen}
          onOpenChange={setIsDownloadOpen}
        />
      </PopOver>
    </div>
  );
};

export default NavbarOptions;
