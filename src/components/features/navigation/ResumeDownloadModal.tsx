import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AppIconSvg,
  ResumeFileType,
  ResumeFileTypeI18n,
  ResumeMode,
  ResumeModeI18n,
} from '@app-portfolio/enums';
import { downloadResume, renderResumePreview } from '@app-portfolio/react-pdf';
import { useScrollLock } from '../../../hooks';
import { useLanguage } from '../../../contexts';
import Button from '../../common/Button';
import Icon from '../../common/icon/Icon';
import PopOver from '../../common/PopOver';

const FILE_TYPES: ResumeFileType[] = [ResumeFileType.JPEG, ResumeFileType.PNG, ResumeFileType.PDF];

const MODES: ResumeMode[] = [ResumeMode.INTERACTIVE, ResumeMode.PRINT];

interface ResumeDownloadModalProps {
  variant?: 'popover' | 'modal';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * Composant de téléchargement du CV : bouton déclencheur + popover de configuration (type de fichier, préréglage)
 * @returns {JSX.Element}
 */
const ResumeDownloadModal = ({
  variant = 'popover',
  open,
  onOpenChange,
}: ResumeDownloadModalProps): React.JSX.Element | null => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const { locale, translate } = useLanguage();
  const [internalOpen, setInternalOpen] = useState(false);
  const [fileType, setFileType] = useState<ResumeFileType>(ResumeFileType.PDF);
  const [mode, setMode] = useState<ResumeMode>(ResumeMode.INTERACTIVE);
  const [isDownloading, setIsDownloading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;

  const handleOpenChange = useCallback(
    (next: boolean) => {
      if (isControlled) onOpenChange?.(next);
      else setInternalOpen(next);
    },
    [isControlled, onOpenChange],
  );

  useScrollLock(variant === 'modal' && isOpen);

  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;
    setIsPreviewLoading(true);
    renderResumePreview(mode, locale)
      .then((dataUrl) => {
        if (cancelled) return;
        setPreviewUrl(dataUrl);
        setIsPreviewLoading(false);
      })
      .catch(() => {
        if (!cancelled) setIsPreviewLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [isOpen, mode]);

  useEffect(() => {
    if (variant !== 'modal' || !isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopImmediatePropagation();
        handleOpenChange(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [variant, isOpen, handleOpenChange]);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadResume({ fileType, mode, locale });
      handleOpenChange(false);
    } finally {
      setIsDownloading(false);
    }
  };

  const renderContent = () => (
    <>
      <p className="text-text-secondary uppercase text-xs font-bold tracking-widest mb-2">
        {translate('resume.preview.title')}
      </p>
      <div className="mb-5 border border-divider bg-background overflow-y-auto flex items-start justify-center min-w-64">
        {previewUrl ? (
          <img src={previewUrl} alt="Aperçu du CV" className="w-64 h-auto" />
        ) : (
          <p className="text-text-secondary text-xs py-8">
            {isPreviewLoading ? translate('resume.preview.generating') : translate('resume.preview.unavailable')}
          </p>
        )}
      </div>

      <p className="text-text-secondary uppercase text-xs font-bold tracking-widest mb-2">
        {translate('resume.fileType.title')}
      </p>
      <div className="flex gap-2 mb-5">
        {FILE_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFileType(type)}
            className={`uppercase text-xs font-bold px-3 pt-1.5 pb-1 border-2 font-title-bold tracking-widest transition-all duration-300 ease-in-out cursor-pointer ${
              fileType === type
                ? 'border-primary text-primary'
                : 'border-divider text-text-secondary hover:border-text-secondary'
            }`}
          >
            {ResumeFileTypeI18n[type]}
          </button>
        ))}
      </div>

      <p className="text-text-secondary uppercase text-xs font-bold tracking-widest mb-2">
        {translate('resume.preset.title')}
      </p>
      <div className="flex gap-2 mb-6">
        {MODES.map((resumeMode) => (
          <button
            key={resumeMode}
            type="button"
            onClick={() => setMode(resumeMode)}
            className={`uppercase text-xs font-bold px-3 pt-1.5 pb-1 border-2 font-title-bold tracking-widest transition-all duration-300 ease-in-out cursor-pointer ${
              mode === resumeMode
                ? 'border-primary text-primary'
                : 'border-divider text-text-secondary hover:border-text-secondary'
            }`}
          >
            {ResumeModeI18n[resumeMode][locale]}
          </button>
        ))}
      </div>

      <Button
        type="button"
        onClick={handleDownload}
        disabled={isDownloading}
        additionalClass="w-full h-12 cursor-pointer"
      >
        {isDownloading ? translate('resume.downloading') : translate('resume.download')}
      </Button>
    </>
  );

  const overlay =
    variant === 'modal' ? (
      isOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => handleOpenChange(false)} />
          <div className="relative z-10 bg-foreground border border-divider shadow-2xl p-6 w-full max-w-md max-h-[85vh] overflow-y-auto">
            {renderContent()}
          </div>
        </div>
      ) : null
    ) : (
      <PopOver
        open={isOpen}
        anchorEl={anchorRef.current}
        onClose={() => handleOpenChange(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        additionalClass="p-6 max-h-[85vh] overflow-y-auto"
      >
        {renderContent()}
      </PopOver>
    );

  if (isControlled) return overlay;

  return (
    <div ref={anchorRef} className="relative">
        <Button
          type="button"
          onClick={() => handleOpenChange(!isOpen)}
          additionalClass="flex items-center gap-2 pr-2"
        >
          {translate('nav.options.download')}
        <Icon
          name={isOpen ? AppIconSvg.CHEVRON_UP : AppIconSvg.CHEVRON_DOWN}
          size="14"
          color="currentColor"
        />
      </Button>

      {overlay}
    </div>
  );
};

export default ResumeDownloadModal;
