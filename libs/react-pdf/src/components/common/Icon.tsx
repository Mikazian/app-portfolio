import { Path, Svg } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import type { AppIconSvgType } from '@app-portfolio/enums';
import { useResumeTheme } from '../../contexts';
import { iconPaths } from '../../data/icon-paths';

type IconProps = {
  name: AppIconSvgType;
  size?: number;
  color?: string;
  strokeColor?: string;
  strokeWidth?: number;
  style?: Style;
};

const Icon = ({ name, size = 25, color, strokeColor, strokeWidth, style }: IconProps) => {
  const colors = useResumeTheme();
  const icon = iconPaths[name];

  if (!icon) {
    return null;
  }

  return (
    <Svg viewBox={icon.viewBox} width={size} height={size} style={style}>
      {icon.paths.map((d, index) => (
        <Path
          key={index}
          d={d}
          fill={color ?? colors.primary}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
      ))}
    </Svg>
  );
};

export default Icon;
