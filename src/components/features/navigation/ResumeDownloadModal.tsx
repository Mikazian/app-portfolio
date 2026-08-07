import { useRef, useState } from 'react';
import {
  AppIconSvg,
  ResumeFileType,
  ResumeFileTypeI18n,
  ResumeMode,
  ResumeModeI18n,
} from '@app-portfolio/enums';
import { downloadResume } from '@app-portfolio/react-pdf';
import Button from '../../common/Button';
import Icon from '../../common/icon/Icon';
import PopOver from '../../common/PopOver';

const FILE_TYPES: ResumeFileType[] = [ResumeFileType.JPEG, ResumeFileType.PNG, ResumeFileType.PDF];

const MODES: ResumeMode[] = [ResumeMode.INTERACTIVE, ResumeMode.PRINT];

/**
 * Composant de téléchargement du CV : bouton déclencheur + popover de configuration (type de fichier, préréglage)
 * @returns {JSX.Element}
 */
const ResumeDownloadModal = (): React.JSX.Element => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [fileType, setFileType] = useState<ResumeFileType>(ResumeFileType.PDF);
  const [mode, setMode] = useState<ResumeMode>(ResumeMode.INTERACTIVE);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      await downloadResume({ fileType, mode });
      setIsOpen(false);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div ref={anchorRef} className="relative">
      <Button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        additionalClass="flex items-center gap-2 pr-2"
      >
        Télécharger
        <Icon
          name={isOpen ? AppIconSvg.CHEVRON_UP : AppIconSvg.CHEVRON_DOWN}
          size="14"
          color="currentColor"
        />
      </Button>

      <PopOver
        open={isOpen}
        anchorEl={anchorRef.current}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        additionalClass="p-6"
      >
        <p className="text-text-secondary uppercase text-xs font-bold tracking-widest mb-2">
          Type de fichier
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
          Préréglage
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
              {ResumeModeI18n[resumeMode]}
            </button>
          ))}
        </div>

        <Button
          type="button"
          onClick={handleDownload}
          disabled={isDownloading}
          additionalClass="w-full h-12 cursor-pointer"
        >
          {isDownloading ? 'Téléchargement...' : 'Télécharger'}
        </Button>
      </PopOver>
    </div>
  );
};

export default ResumeDownloadModal;
