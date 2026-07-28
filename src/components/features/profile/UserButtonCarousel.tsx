import { AppIconSvgType } from '../../../types/enums';

import Icon from '../../common/icon/Icon';

interface UserButtonCarouselProps {
  icon: AppIconSvgType;
  onClick: () => void;
  disabled?: boolean;
  additionalClass?: string;
}

/**
 * Composant Bouton du carrousel utilisateur
 * @param icon - Nom de l'icône
 * @param onClick - Action au clic
 * @param disabled - Désactiver le bouton
 * @param additionalClass - Style du bouton
 * @returns {JSX.Element}
 */
const UserButtonCarousel = ({
  icon,
  onClick,
  disabled,
  additionalClass,
}: UserButtonCarouselProps): React.JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`bg-background border border-divider p-2 rounded-full transition-all duration-300 ease-in-out ${additionalClass}`}
    >
      <Icon name={icon} size="25" color="var(--text-primary)" />
    </button>
  );
};

export default UserButtonCarousel;
