import { useRef, useState } from 'react';
import { AppIconSvg } from '@app-portfolio/enums';

import Icon from '../../common/icon/Icon';
import PopOver from '../../common/PopOver';
import LanguageSwitcherModal from './LanguageSwitcherModal';
import { useLanguage } from '../../../contexts';

/**
 * Sélecteur de langue de la barre de navigation : bouton globe ouvrant un menu FR/EN
 * @returns {JSX.Element}
 */
const LanguageSwitcher = (): React.JSX.Element => {
  const { locale, translate } = useLanguage();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div ref={anchorRef} className="relative z-30 flex items-center">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={translate('nav.options.language')}
        aria-expanded={isOpen}
        className="rounded-full cursor-pointer transition-colors duration-200 hover:text-primary"
      >
        <Icon
          name={locale === 'fr' ? AppIconSvg.CIRCLE_FLAGS_FR : AppIconSvg.CIRCLE_FLAGS_EN}
          size="20"
        />
      </button>

      <PopOver
        open={isOpen}
        anchorEl={anchorRef.current}
        onClose={() => setIsOpen(false)}
        additionalClass="min-w-28"
      >
        <LanguageSwitcherModal onClose={() => setIsOpen(false)} />
      </PopOver>
    </div>
  );
};

export default LanguageSwitcher;
