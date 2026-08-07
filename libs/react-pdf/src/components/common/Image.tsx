import { Image as PdfImage } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import type { AppIconSvgType } from '@app-portfolio/enums';
import { iconImages } from '../../data/icon-images';

type ImageProps = {
  name: AppIconSvgType;
  size?: number;
  style?: Style;
};

const Image = ({ name, size = 25, style }: ImageProps) => {
  const src = iconImages[name];

  if (!src) {
    return null;
  }

  return <PdfImage src={src} style={{ width: size, height: size, ...style }} />;
};

export default Image;
