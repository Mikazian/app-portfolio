import type { ExperienceType } from '@app-portfolio/shared';
import ResumeExperienceListItem from './ResumeExperienceListItem';

type ResumeExperienceListProps = {
  experiences: ExperienceType[];
};

const ResumeExperienceList = ({ experiences }: ResumeExperienceListProps) => (
  <>
    {experiences.map((exp) => (
      <ResumeExperienceListItem key={exp.id} experience={exp} />
    ))}
  </>
);

export default ResumeExperienceList;
