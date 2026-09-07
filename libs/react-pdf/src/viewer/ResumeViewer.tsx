import { useState } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { ResumeMode, ResumeModeI18n, type Locale } from '@app-portfolio/enums';
import { getResumeData } from '../data/resume';
import { pdfT } from '../i18n';
import ResumeDocument from '../components/ResumeDocument';

const MODES: ResumeMode[] = [ResumeMode.INTERACTIVE, ResumeMode.PRINT];

type ResumeViewerProps = { locale?: Locale };

const ResumeViewer = ({ locale = 'fr' }: ResumeViewerProps) => {
  const [mode, setMode] = useState<ResumeMode>(ResumeMode.INTERACTIVE);
  const { socialNetworks } = getResumeData(locale);

  return (
    <div className="min-h-screen flex flex-col items-center gap-6 px-4 py-10 bg-background">
      <h1 className="text-2xl font-title-bold text-text-primary">{pdfT(locale, 'viewer.title')}</h1>

      <div className="flex items-center gap-1 rounded-full border border-divider p-1">
        {MODES.map((modeValue) => (
          <button
            key={modeValue}
            type="button"
            onClick={() => setMode(modeValue)}
            className={`rounded-full px-4 py-2 text-sm font-text-bold transition-colors ${
              mode === modeValue
                ? 'bg-primary text-background'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {ResumeModeI18n[modeValue][locale]}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <PDFDownloadLink
          document={<ResumeDocument mode={mode} locale={locale} />}
          fileName={
            mode === ResumeMode.PRINT ? 'cv-mike-xiong-impression.pdf' : 'cv-mike-xiong.pdf'
          }
          className="bg-primary text-background font-title-bold uppercase px-8 py-3 text-sm tracking-widest hover:opacity-90 transition-opacity"
        >
          {({ loading }) => (loading ? pdfT(locale, 'viewer.generating') : pdfT(locale, 'viewer.download'))}
        </PDFDownloadLink>

        {socialNetworks.map((network) => (
          <a
            key={network.id}
            href={network.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-text-bold uppercase text-sm tracking-widest hover:opacity-80 transition-opacity"
          >
            {network.name}
          </a>
        ))}
      </div>

      <PDFViewer style={{ width: '100%', height: '80vh', maxWidth: 800 }}>
        <ResumeDocument mode={mode} locale={locale} />
      </PDFViewer>
    </div>
  );
};

export default ResumeViewer;
