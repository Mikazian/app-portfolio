import { AppIconSvgType } from "../../types/enums/app-icon.enum";
import { SvgIconSet } from "./SvgIconSet";
import Text from "./Text";

export type IconNameType = AppIconSvgType;

const iconSets = [SvgIconSet];

export interface IconProps {
  name: IconNameType;
  size?: string;
  color?: string;
  style?: string;
  strokeColor?: string;
  strokeWidth?: string;
}
/**
 * Composant Icône
 * @param name - Nom de l'icône
 * @param size - Taille de l'icône
 * @param color - Couleur de l'icône
 * @param style - Style de l'icône
 * @param strokeColor - Couleur du contour de l'icône
 * @param strokeWidth - Largeur du contour de l'icône
 * @returns {JSX.Element}
 */
const Icon = ({
  name,
  size,
  color,
  style,
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
          style={style}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
      );
    }
  }
  return <Text>Icône non supportée</Text>;
};

export default Icon;
