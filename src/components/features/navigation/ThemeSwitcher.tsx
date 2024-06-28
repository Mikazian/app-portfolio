import { AppIconSvgType } from "../../../types/enums";

import Icon from "../../common/Icon";

interface ThemeSwitcherProps {
  icon: AppIconSvgType;
  onClick: () => void;
}

const ThemeSwitcher = ({ icon, onClick }: ThemeSwitcherProps) => {
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
