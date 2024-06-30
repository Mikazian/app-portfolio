import { ReactSVG } from "react-svg";
import { assets } from "../../assets";
import { AppIconSvgPrefix } from "../../types/enums/app-icon.enum";
import type { IconProps } from "./Icon";

const prefix = AppIconSvgPrefix;
const baseSize = "25";

/**
 * Composant Icon pour afficher les icônes SVG
 * @param name - Nom de l'icône
 * @param color - Couleur de l'icône
 * @param strokeColor - Couleur du contour de l'icône
 * @param strokeWidth - Largeur du contour de l'icône
 * @param style - Style CSS
 * @param size - Taille de l'icône
 * @returns {JSX.Element}
 */
const component = ({
  name,
  color,
  strokeColor,
  strokeWidth,
  style,
  size,
}: IconProps): JSX.Element => {
  const source = assets.icons[name];

  return (
    <ReactSVG
      src={source}
      beforeInjection={(svg) => {
        const elements = svg.querySelectorAll("*");
        elements.forEach((el) => {
          if (color) el.setAttribute("fill", color);
          if (strokeColor) el.setAttribute("stroke", strokeColor);
          if (strokeWidth) el.setAttribute("stroke-width", strokeWidth);
        });
        svg.setAttribute("width", size || baseSize);
        svg.setAttribute("height", size || baseSize);
      }}
      className={style}
    />
  );
};

export const SvgIconSet = { prefix, component };
