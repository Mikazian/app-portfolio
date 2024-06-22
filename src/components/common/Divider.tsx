import type { ColorKeysType } from "../../types/interfaces/theme";

interface VerticalProps {
  height: string;
  width?: never;
  color?: ColorKeysType;
  isVertical: true;
}

interface HorizontalProps {
  height?: never;
  width: string;
  color?: ColorKeysType;
  isVertical?: false;
}

type DividerProps = VerticalProps | HorizontalProps;

const Divider = ({
  height,
  width,
  color,
  isVertical = false,
}: DividerProps) => {
  let style = "";
  if (isVertical) {
    style = `w-px h-${height} bg-${color ? color : "light"}`;
  } else {
    style = `h-px w-${width} bg-${color ? color : "light"}`;
  }

  return <div className={style} />;
};

export default Divider;
