import type { ExperienceType } from '@app-portfolio/shared';
import ResumeExperienceTimeline from './ResumeExperienceTimeline';
import ResumeSection from './ResumeSection';

type ResumeExperienceProps = {
  experiences: ExperienceType[];
};

const ResumeExperience = ({ experiences }: ResumeExperienceProps) => (
  <ResumeSection title="Expériences">
    <ResumeExperienceTimeline experiences={experiences} />
  </ResumeSection>
);

export default ResumeExperience;
