import type { ReactNode } from 'react';
import { View } from '@react-pdf/renderer';
import type { Style } from '@react-pdf/types';
import type { AppIconSvgType } from '@app-portfolio/enums';
import { resumeColors } from '../../styles';
import Image from './Image';
import Text from './Text';

type LabelIconProps = {
  icon?: AppIconSvgType;
  children: ReactNode;
  color?: string;
  style?: Style;
};

const LabelIcon = ({ icon, children, color, style }: LabelIconProps) => {
  const colors = resumeColors;
  const labelColor = color ?? colors.primary;

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          borderRadius: 999,
          borderWidth: 1,
          borderColor: labelColor,
          paddingHorizontal: 6,
          paddingVertical: 2,
        },
        ...(style ? [style] : []),
      ]}
    >
      {icon ? <Image name={icon} size={7} /> : null}

      <Text variant="span" color={labelColor} fontWeight={700} style={{ lineHeight: 0.75 }}>
        {children}
      </Text>
    </View>
  );
};

export default LabelIcon;
