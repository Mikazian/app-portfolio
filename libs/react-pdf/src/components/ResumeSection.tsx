import { View } from '@react-pdf/renderer';
import type { ReactNode } from 'react';
import { resumeColors } from '../styles';
import Text from './common/Text';

type ResumeSectionProps = {
  title: string;
  lineLength?: 'short' | 'long';
  children: ReactNode;
};

const LINE_LENGTHS: Record<NonNullable<ResumeSectionProps['lineLength']>, number> = {
  short: 24,
  long: 36,
};

const ResumeSection = ({ title, lineLength = 'long', children }: ResumeSectionProps) => {
  const colors = resumeColors;

  return (
    <View style={{ flexDirection: 'column', rowGap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <View
          style={{ width: LINE_LENGTHS[lineLength], height: 1, backgroundColor: colors.primary }}
        />

        <Text variant="h3" color={colors.textPrimary} fontWeight={700} style={{ lineHeight: 1 }}>
          {title}
        </Text>
      </View>

      {children}
    </View>
  );
};

export default ResumeSection;
