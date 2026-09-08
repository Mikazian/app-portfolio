import type { ExperienceType } from '@app-portfolio/shared';
import type { Locale } from '@app-portfolio/enums';
import { pdfT } from '../i18n';
import ResumeExperienceTimeline from './ResumeExperienceTimeline';
import ResumeSection from './ResumeSection';

type ResumeExperienceProps = {
  experiences: ExperienceType[];
  locale: Locale;
};

const ResumeExperience = ({ experiences, locale }: ResumeExperienceProps) => (
  <ResumeSection title={pdfT(locale, 'section.experiences')}>
    <ResumeExperienceTimeline experiences={experiences} />
  </ResumeSection>
);

export default ResumeExperience;
