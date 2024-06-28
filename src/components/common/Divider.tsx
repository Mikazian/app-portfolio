interface DividerProps {
  height?: string;
  width?: string;
  isVertical?: boolean;
}

/**
 * Composant Divider
 * @param height - Hauteur du Divider
 * @param width - Largeur du Divider
 * @param isVertical - Orientation du Divider
 * @returns {JSX.Element}
 */
const Divider = ({
  height,
  width,
  isVertical = false,
}: DividerProps): JSX.Element => {
  let style = "";
  if (isVertical) {
    style = `w-px h-${height} bg-divider relative z-20`;
  } else {
    style = `h-px w-${width} bg-divider relative- z-20`;
  }

  return <div className={style} />;
};

export default Divider;
