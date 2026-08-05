import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { useTheme } from '../../../../src/contexts';
import ResumeDocument from '../components/ResumeDocument';

const ResumeViewer = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center gap-6 px-4 py-10 bg-background">
      <h1 className="text-2xl font-title-bold text-text-primary">Mon CV</h1>

      <PDFDownloadLink
        document={<ResumeDocument theme={theme} />}
        fileName="cv-mike-xiong.pdf"
        className="bg-primary text-background font-title-bold uppercase px-8 py-3 text-sm tracking-widest hover:opacity-90 transition-opacity"
      >
        {({ loading }) => (loading ? 'Génération du PDF...' : 'Télécharger le CV')}
      </PDFDownloadLink>

      <PDFViewer style={{ width: '100%', height: '80vh', maxWidth: 800 }}>
        <ResumeDocument theme={theme} />
      </PDFViewer>
    </div>
  );
};

export default ResumeViewer;
