import { ReactSVG } from "react-svg";
import { assets } from "../../assets";
import { AppIconSvgPrefix } from "../../types/enums/app-icon.enum";
import type { IconProps } from "./Icon";

const prefix = AppIconSvgPrefix;
const baseSize = "25";

const component = ({
  name,
  color,
  strokeColor,
  strokeWidth,
  style,
  size,
}: IconProps) => {
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
