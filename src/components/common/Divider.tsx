import type { ColorKeysType } from "../../types/interfaces/theme";

interface DividerProps {
  height?: string;
  width?: string;
  color?: ColorKeysType;
  isVertical?: boolean;
}

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
