import { AppIconSvgType } from "../../../types/enums";

import Icon from "../../common/Icon";

interface ThemeSwitcherProps {
  icon: AppIconSvgType;
  onClick: () => void;
}

/**
 * Composant pour changer de thème
 * @param icon - Nom de l'icône
 * @param onClick - Action au clic
 * @returns {JSX.Element}
 */
const ThemeSwitcher = ({ icon, onClick }: ThemeSwitcherProps): JSX.Element => {
  return (
    <button
      type="button"
      className="rounded-full p-1.5 relative z-20"
      onClick={onClick}
    >
      <Icon name={icon} size="20" color="var(--onbackground)" />
    </button>
  );
};

export default ThemeSwitcher;
