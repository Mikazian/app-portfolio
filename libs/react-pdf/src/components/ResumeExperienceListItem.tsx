import { View } from '@react-pdf/renderer';
import type { ExperienceType } from '@app-portfolio/shared';
import ResumeExperienceCard from './ResumeExperienceCard';
import ResumeExperienceDot from './ResumeExperienceDot';

type ResumeExperienceListItemProps = {
  experience: ExperienceType;
};

const ResumeExperienceListItem = ({ experience }: ResumeExperienceListItemProps) => (
  <View style={{ flexDirection: 'row', gap: 12 }}>
    <ResumeExperienceDot logo={experience.company.logo} />

    <View style={{ flex: 1 }}>
      <ResumeExperienceCard experience={experience} />
    </View>
  </View>
);

export default ResumeExperienceListItem;
