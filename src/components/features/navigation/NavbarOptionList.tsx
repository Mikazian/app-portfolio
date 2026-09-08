import { AppIconSvg } from '@app-portfolio/enums';
import { useTheme } from '../../../contexts';
import { useLanguage } from '../../../contexts';

import Icon from '../../common/icon/Icon';
import Switch from '../../common/Switch';
import Text from '../../common/Text';
import NavbarOptionListItem from './NavbarOptionListItem';

type NavbarOptionListProps = {
  onDownload: () => void;
};

/**
 * Liste des options du menu mobile (burger) : réglage du thème (switch) et téléchargement du CV
 * @param onDownload - Action d'ouverture de la modal de téléchargement du CV
 * @returns {JSX.Element}
 */
const NavbarOptionList = ({ onDownload }: NavbarOptionListProps): React.JSX.Element => {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, translate } = useLanguage();
  const themeChecked = theme === 'dark';

  return (
    <ul className="w-full flex flex-col">
      <NavbarOptionListItem>
        <Text
          as="span"
          className="text-sm text-text-primary group-hover:text-primary transition-colors duration-200"
        >
          {translate('nav.options.theme')}
        </Text>

        <Switch
          size="small"
          checked={themeChecked}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          ariaLabel="Basculer le thème clair ou sombre"
          knobIcon={
            <Icon
              name={themeChecked ? AppIconSvg.MOON : AppIconSvg.SUN}
              size="10"
              color="var(--text-primary)"
            />
          }
        />
      </NavbarOptionListItem>

      <NavbarOptionListItem separator />

      <NavbarOptionListItem>
        <Text
          as="span"
          className="text-sm text-text-primary group-hover:text-primary transition-colors duration-200"
        >
          {translate('nav.options.language')}
        </Text>

        <div className="flex items-center gap-3">
          <Text as="span" className="text-xs text-text-primary">
            {locale.toUpperCase()}
          </Text>

          <Switch
            size="small"
            checked={locale === 'en'}
            onChange={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
            ariaLabel={translate('nav.options.language')}
            knobIcon={
              <Icon
                name={locale === 'fr' ? AppIconSvg.CIRCLE_FLAGS_FR : AppIconSvg.CIRCLE_FLAGS_EN}
                size="10"
              />
            }
          />
        </div>
      </NavbarOptionListItem>

      <NavbarOptionListItem separator />

      <NavbarOptionListItem onClick={onDownload}>
        <Text
          as="span"
          className="text-sm text-text-primary group-hover:text-primary transition-colors duration-200"
        >
          {translate('nav.options.download')}
        </Text>
      </NavbarOptionListItem>
    </ul>
  );
};

export default NavbarOptionList;
