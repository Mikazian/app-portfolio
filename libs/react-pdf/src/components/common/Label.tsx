import type { ReactNode } from 'react';
import type { Style } from '@react-pdf/types';
import { useResumeTheme } from '../../contexts';
import Text from './Text';

type LabelProps = {
  children: ReactNode;
  color?: Style['color'];
  backgroundColor?: Style['backgroundColor'];
  isOutline?: boolean;
  style?: Style;
};

const Label = ({ children, color, backgroundColor, isOutline = false, style }: LabelProps) => {
  const colors = useResumeTheme();
  const labelColor = color ?? (isOutline ? colors.primary : colors.background);

  return (
    <Text
      variant="span"
      color={labelColor}
      fontWeight={700}
      style={{
        backgroundColor: isOutline ? 'transparent' : (backgroundColor ?? colors.secondary),
        borderRadius: 999,
        borderWidth: isOutline ? 1 : undefined,
        borderColor: isOutline ? labelColor : undefined,
        paddingHorizontal: 6,
        paddingVertical: 2,
        lineHeight: 0.8,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export default Label;
