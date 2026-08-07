import { View } from '@react-pdf/renderer';
import { resumeColors } from '../styles';
import { resumeData } from '../data/resume';
import Image from './common/Image';
import ResumeSection from './ResumeSection';
import Text from './common/Text';

const ResumeHobby = () => {
  const colors = resumeColors;
  const { hobbies } = resumeData;

  return (
    <ResumeSection title="Centres d'intérêt" lineLength="short">
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
