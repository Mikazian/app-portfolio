import { AppIconSvg } from '@app-portfolio/enums';
import { useTheme } from '../../../contexts';

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
  const themeChecked = theme === 'dark';

  return (
    <ul className="w-full flex flex-col">
      <NavbarOptionListItem>
        <Text as="span" className="text-sm text-text-primary">
          Theme
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

      <NavbarOptionListItem onClick={onDownload}>
        <Text as="span" className="text-sm text-text-primary">
          Télécharger CV
        </Text>
      </NavbarOptionListItem>
    </ul>
  );
};

export default NavbarOptionList;
