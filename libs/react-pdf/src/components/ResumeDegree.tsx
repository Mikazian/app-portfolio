import { View } from '@react-pdf/renderer';
import { DegreeType } from '@app-portfolio/shared';
import { resumeColors } from '../styles';
import Card from './common/Card';
import Grid from './common/Grid';
import Image from './common/Image';
import ResumeSection from './ResumeSection';
import Text from './common/Text';

type ResumeDegreeProps = {
  degrees: DegreeType[];
};

const ResumeDegree = ({ degrees }: ResumeDegreeProps) => {
  const colors = resumeColors;

  if (!degrees) {
    return null;
  }

  return (
    <ResumeSection title="Formation">
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
                padding: 12,
              }}
            >
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: 8,
                  }}
                >
                  <Image name="svg-degree" size={12} />

                  <View style={{ flex: 1, minWidth: 0, justifyContent: 'center' }}>
                    <Text variant="h5" color={colors.primary} fontWeight={700}>
                      {degree.label}
                    </Text>
                  </View>
                </View>
              </View>

              <View>
                <Text
                  variant="p"
                  color={colors.textPrimary}
                  fontWeight={400}
                  style={{ marginTop: 4 }}
                >
                  {degree.degree}
                </Text>

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
