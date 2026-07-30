interface DividerProps {
  isVertical?: boolean;
}

/**
 * Composant Divider
 * @param isVertical - Orientation du Divider
 * @returns {JSX.Element}
 */
const Divider = ({ isVertical = false }: DividerProps): React.JSX.Element => {
  const style = isVertical
    ? 'w-px h-full bg-divider relative z-20'
    : 'h-px w-full bg-divider relative z-20';

  return <div className={style} />;
};

export default Divider;
