import { View } from '@react-pdf/renderer';
import type { ExperienceType } from '@app-portfolio/shared';
import { resumeColors } from '../styles';
import ResumeExperienceList from './ResumeExperienceList';

type ResumeExperienceTimelineProps = {
  experiences: ExperienceType[];
};

const ResumeExperienceTimeline = ({ experiences }: ResumeExperienceTimelineProps) => {
  const colors = resumeColors;
  const lineCenter = 12;
  const markerSize = 8;

  return (
    <View style={{ position: 'relative', gap: 16 }}>
      <View
        style={{
          position: 'absolute',
          left: 11.5,
          top: 0,
          bottom: 0,
          width: 1.5,
          backgroundColor: colors.secondary,
        }}
      />

      <View
        style={{
          position: 'absolute',
          left: lineCenter - markerSize / 2,
          bottom: 0,
          width: markerSize,
          height: markerSize,
          borderRadius: markerSize / 2,
          backgroundColor: colors.secondary,
        }}
      />

      <ResumeExperienceList experiences={experiences} />
    </View>
  );
};

export default ResumeExperienceTimeline;
