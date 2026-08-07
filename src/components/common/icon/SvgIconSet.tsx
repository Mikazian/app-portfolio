import { ReactSVG } from 'react-svg';
import { assets } from '../../../assets';
import { AppIconSvgPrefix } from '@app-portfolio/enums';
import type { IconProps } from './Icon';

const prefix = AppIconSvgPrefix;
const baseSize = '25';

const component = ({
  name,
  color,
  strokeColor,
  strokeWidth,
  className,
  size,
}: IconProps): React.JSX.Element => {
  const source = assets.icons[name];

  return (
    <ReactSVG
      src={source}
      beforeInjection={(svg) => {
        const elements = svg.querySelectorAll('*');
        elements.forEach((el) => {
          if (color) el.setAttribute('fill', color);
          if (strokeColor) el.setAttribute('stroke', strokeColor);
          if (strokeWidth) el.setAttribute('stroke-width', strokeWidth);
        });
        svg.setAttribute('width', size || baseSize);
        svg.setAttribute('height', size || baseSize);
      }}
      className={className}
    />
  );
};

export const SvgIconSet = { prefix, component };
