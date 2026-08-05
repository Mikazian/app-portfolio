import { Document, Page } from '@react-pdf/renderer';
import type { Theme } from '../../../../src/contexts';
import { getTheme } from '../styles';
import { ResumeThemeProvider } from '../contexts/ResumeThemeContext';
import ResumeHeader from './ResumeHeader';
import ResumeExperience from './ResumeExperience';
import { resumeData } from '../data/resume';
import Grid from './common/Grid';
import Card from './common/Card';
import ResumeDegree from './ResumeDegree';

type ResumeDocumentProps = {
  theme: Theme;
};

const ResumeDocument = ({ theme }: ResumeDocumentProps) => {
  const colors = getTheme(theme);
  const { experiences, degrees } = resumeData;

  return (
    <Document>
      <ResumeThemeProvider theme={theme}>
        <Page
          size="A4"
          wrap={false}
          style={{
            fontFamily: 'LaguSans',
            backgroundColor: colors.background,
          }}
        >
          <ResumeHeader />

          <Grid container>
            <Grid size={4}>
              <Card style={{ height: '100%' }}></Card>
            </Grid>

            <Grid
              size="grow"
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: 32,
                paddingHorizontal: 20,
                paddingVertical: 28,
              }}
            >
              <ResumeExperience experiences={experiences} />
              <ResumeDegree degrees={degrees} />
            </Grid>
          </Grid>
        </Page>
      </ResumeThemeProvider>
    </Document>
  );
};

export default ResumeDocument;
