import { AppIconSvgType } from "../../../types/enums";

import Icon from "../../common/Icon";

interface UserButtonCarouselProps {
  icon: AppIconSvgType;
  onClick: () => void;
  disabled?: boolean;
  style?: string;
}

/**
 * Composant Bouton du carrousel utilisateur
 * @param icon - Nom de l'icône
 * @param onClick - Action au clic
 * @param disabled - Désactiver le bouton
 * @param style - Style du bouton
 * @returns {JSX.Element}
 */
const UserButtonCarousel = ({
  icon,
  onClick,
  disabled,
  style,
}: UserButtonCarouselProps): JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`bg-background border border-divider p-2 rounded-full transition-all duration-300 ease-in-out ${style}`}
    >
      <Icon name={icon} size="25" color="var(--onbackground)" />
    </button>
  );
};

export default UserButtonCarousel;
