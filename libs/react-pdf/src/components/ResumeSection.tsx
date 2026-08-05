import { View } from '@react-pdf/renderer';
import type { ReactNode } from 'react';
import { useResumeTheme } from '../contexts';
import Text from './common/Text';

type ResumeSectionProps = {
  title: string;
  children: ReactNode;
};

const ResumeSection = ({ title, children }: ResumeSectionProps) => {
  const colors = useResumeTheme();

  return (
    <View style={{ flexDirection: 'column', rowGap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <View style={{ width: 36, height: 1, backgroundColor: colors.primary }} />

        <Text variant="h3" color={colors.textPrimary} fontWeight={700} style={{ lineHeight: 1 }}>
          {title}
        </Text>
      </View>

      {children}
    </View>
  );
};

export default ResumeSection;
