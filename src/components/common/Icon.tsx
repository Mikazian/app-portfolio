import { AppIconSvgType } from "../../types/enums";
import { SvgIconSet } from "./SvgIconSet";
import Text from "./Text";

const iconSets = [SvgIconSet];

export interface IconProps {
  name: AppIconSvgType;
  size?: string;
  color?: string;
  className?: string;
  strokeColor?: string;
  strokeWidth?: string;
}
/**
 * Composant Icône
 * @param name - Nom de l'icône
 * @param size - Taille de l'icône
 * @param color - Couleur de l'icône
 * @param className - Style de l'icône
 * @param strokeColor - Couleur du contour de l'icône
 * @param strokeWidth - Largeur du contour de l'icône
 * @returns {JSX.Element}
 */
const Icon = ({
  name,
  size,
  color,
  className,
  strokeColor,
  strokeWidth,
}: IconProps): JSX.Element | undefined => {
  for (const set of iconSets) {
    const regex = new RegExp(`^${set.prefix}-`);
    if (regex.test(name)) {
      return (
        <set.component
          name={name}
          size={size}
          color={color}
          className={className}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
      );
    }
  }
  return <Text>Icône non supportée</Text>;
};

export default Icon;
