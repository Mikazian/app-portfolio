import { View } from '@react-pdf/renderer';
import { resumeColors } from '../styles';
import { getResumeData } from '../data/resume';
import { pdfT } from '../i18n';
import type { Locale } from '@app-portfolio/enums';
import Image from './common/Image';
import ResumeSection from './ResumeSection';
import Text from './common/Text';

type ResumeHobbyProps = { locale: Locale };

const ResumeHobby = ({ locale }: ResumeHobbyProps) => {
  const colors = resumeColors;
  const { hobbies } = getResumeData(locale);

  return (
    <ResumeSection title={pdfT(locale, 'section.hobbies')} lineLength="short">
      {hobbies.map((hobby) => (
        <View
          key={hobby.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Image name={hobby.icon} size={12} />

          <Text variant="p" color={colors.textPrimary} fontWeight={400} style={{ lineHeight: 0.8 }}>
            {hobby.label}
          </Text>
        </View>
      ))}
    </ResumeSection>
  );
};

export default ResumeHobby;
