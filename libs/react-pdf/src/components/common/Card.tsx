import { View } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import type { ReactNode } from 'react';
import { useResumeTheme } from '../../contexts';

type CardProps = {
  children?: ReactNode;
  style?: Style;
};

const Card = ({ children, style }: CardProps) => {
  const colors = useResumeTheme();
  const styles: Style[] = [
    {
      backgroundColor: colors.foreground,
      borderWidth: 1,
      borderColor: colors.divider,
      padding: 16,
    },
    ...(style ? [style] : []),
  ];

  return <View style={styles}>{children}</View>;
};

export default Card;
