import { Document, Page } from '@react-pdf/renderer';
import { ResumeMode } from '@app-portfolio/enums';
import { resumeColors } from '../styles';
import ResumeHeader from './ResumeHeader';
import ResumeExperience from './ResumeExperience';
import { resumeData } from '../data/resume';
import Grid from './common/Grid';
import Card from './common/Card';
import ResumeDegree from './ResumeDegree';
import ResumeContact from './ResumeContact';
import ResumeSkill from './ResumeSkill';
import ResumeHobby from './ResumeHobby';

type ResumeDocumentProps = {
  mode?: ResumeMode;
};

const ResumeDocument = ({ mode = ResumeMode.INTERACTIVE }: ResumeDocumentProps) => {
  const { experiences, degrees } = resumeData;

  return (
    <Document>
      <Page
        size="A4"
        wrap={false}
        style={{
          fontFamily: 'LaguSans',
          backgroundColor: resumeColors.background,
        }}
      >
        <ResumeHeader />

        <Grid container>
          <Grid size={4}>
            <Card
              style={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: 32,
                paddingHorizontal: 20,
                paddingVertical: 28,
                height: '100%',
              }}
            >
              <ResumeContact mode={mode} />
              <ResumeSkill />
              <ResumeHobby />
            </Card>
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
    </Document>
  );
};

export default ResumeDocument;
