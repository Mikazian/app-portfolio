import { ResumeViewer } from '@app-portfolio/react-pdf';
import { useLanguage } from '../contexts';

const Resume = () => {
  const { locale } = useLanguage();

  return <ResumeViewer locale={locale} />;
};

export default Resume;
