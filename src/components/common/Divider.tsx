import type { ColorKeysType } from "../../types/interfaces/theme";

interface DividerProps {
  height?: string;
  width?: string;
  color?: ColorKeysType;
  isVertical?: boolean;
}

/**
 * Composant Divider
 * @param height - Hauteur du Divider
 * @param width - Largeur du Divider
 * @param color - Couleur du Divider
 * @param isVertical - Orientation du Divider
 * @returns {JSX.Element}
 */
const Divider = ({
  height,
  width,
  color,
  isVertical = false,
}: DividerProps): JSX.Element => {
  let style = "";
  if (isVertical) {
    style = `w-px h-${height} bg-${color ? color : "light"}`;
  } else {
    style = `h-px w-${width} bg-${color ? color : "light"}`;
  }

  return <div className={style} />;
};

export default Divider;
