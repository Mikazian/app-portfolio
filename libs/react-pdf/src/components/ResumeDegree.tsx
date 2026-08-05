import { View } from '@react-pdf/renderer';
import { DegreeType } from '@app-portfolio/shared';
import { useResumeTheme } from '../contexts';
import Card from './common/Card';
import Divider from './common/Divider';
import Grid from './common/Grid';
import Icon from './common/Icon';
import ResumeSection from './ResumeSection';
import Text from './common/Text';

type ResumeDegreeProps = {
  degrees: DegreeType[];
};

const ResumeDegree = ({ degrees }: ResumeDegreeProps) => {
  const colors = useResumeTheme();

  if (!degrees) {
    return null;
  }

  return (
    <ResumeSection title="Certifications">
      <Grid container spacing={16} style={{ alignItems: 'stretch' }}>
        {degrees.map((degree) => (
          <Grid key={degree.id} size={6} style={{ display: 'flex', flexDirection: 'column' }}>
            <Card
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'space-between',
                gap: 8,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Icon name="svg-degree" size={16} />
                  <View style={{ flex: 1, minWidth: 0, minHeight: 24, justifyContent: 'center' }}>
                    <Text
                      variant="h5"
                      color={colors.primary}
                      fontWeight={700}
                      style={{ lineHeight: 1 }}
                    >
                      {degree.label}
                    </Text>
                  </View>
                </View>

                <Text
                  variant="p"
                  color={colors.textPrimary}
                  fontWeight={400}
                  style={{ marginTop: 4 }}
                >
                  {degree.degree}
                </Text>
              </View>

              <View>
                <Divider style={{ marginBottom: 8 }} />

                <Text
                  variant="span"
                  color={colors.textSecondary}
                  fontWeight={400}
                  style={{ lineHeight: 1, marginTop: 4 }}
                >
                  {`Année : ${degree.year}`}
                </Text>
              </View>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ResumeSection>
  );
};

export default ResumeDegree;
