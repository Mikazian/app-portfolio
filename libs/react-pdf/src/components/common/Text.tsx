import { Text as RPDFText } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import type { ReactNode } from 'react';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'strong' | 'span';

type TextProps = {
  variant?: TextVariant;
  color?: Style['color'];
  fontWeight?: Style['fontWeight'];
  style?: Style;
  children: ReactNode;
};

const NEUE_PLAK_DEFAULT: Style = { fontFamily: 'NeuePlak', fontSize: 8 };
const LAGU_SANS_DEFAULT: Style = { fontFamily: 'LaguSans', fontSize: 8 };

const VARIANT_STYLES: Record<TextVariant, Style> = {
  h1: { ...NEUE_PLAK_DEFAULT, fontSize: 24 },
  h2: { ...NEUE_PLAK_DEFAULT, fontSize: 20 },
  h3: { ...NEUE_PLAK_DEFAULT, fontSize: 16 },
  h4: { ...NEUE_PLAK_DEFAULT, fontSize: 12 },
  h5: { ...NEUE_PLAK_DEFAULT, fontSize: 10 },
  h6: NEUE_PLAK_DEFAULT,
  strong: LAGU_SANS_DEFAULT,
  span: LAGU_SANS_DEFAULT,
  p: LAGU_SANS_DEFAULT,
};

const Text = ({ variant = 'p', color, fontWeight, style, children }: TextProps) => {
  const styles: Style[] = [
    VARIANT_STYLES[variant],
    ...(color ? [{ color }] : []),
    ...(fontWeight ? [{ fontWeight }] : []),
    ...(style ? [style] : []),
  ];

  return <RPDFText style={styles}>{children}</RPDFText>;
};

export default Text;
