import { Fragment } from 'react';
import { useLanguage, type Locale } from '../../../contexts';
import Divider from '../../common/Divider';

const LOCALES: Locale[] = ['fr', 'en'];

type LanguageSwitcherModalProps = {
  onClose: () => void;
};

/**
 * Menu de sélection de langue (FR/EN) affiché dans le popover du sélecteur de langue
 * @param onClose - Action de fermeture du popover après sélection
 * @returns {JSX.Element}
 */
const LanguageSwitcherModal = ({ onClose }: LanguageSwitcherModalProps): React.JSX.Element => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex flex-col">
      {LOCALES.map((lang, index) => (
        <Fragment key={lang}>
          <button
            type="button"
            onClick={() => {
              setLocale(lang);
              onClose();
            }}
            className={`px-4 py-2 text-sm uppercase cursor-pointer transition-colors duration-200 ${
              locale === lang ? 'text-primary' : 'text-text-primary hover:text-primary'
            }`}
          >
            {lang.toUpperCase()}
          </button>

          {index < LOCALES.length - 1 ? <Divider /> : null}
        </Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcherModal;
