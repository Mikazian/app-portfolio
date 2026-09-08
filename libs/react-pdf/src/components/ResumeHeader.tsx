import { Text as RPDFText, View } from '@react-pdf/renderer';
import { resumeColors } from '../styles';
import { getResumeData } from '../data/resume';
import type { Locale } from '@app-portfolio/enums';
import Avatar from './common/Avatar';
import Text from './common/Text';
import ProfilePhoto from '../../../../src/assets/images/photo.jpg';

type ResumeHeaderProps = { locale: Locale };

const ResumeHeader = ({ locale }: ResumeHeaderProps) => {
  const colors = resumeColors;
  const { profile, jobs } = getResumeData(locale);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.dark,
        paddingVertical: 20,
        paddingHorizontal: 32,
        gap: 32,
        borderBottomWidth: 1,
        borderColor: colors.secondary,
      }}
    >
      <Avatar src={ProfilePhoto} size={140} style={{ backgroundColor: 'white' }} />

      <View style={{ flex: 1, flexDirection: 'column', gap: 12 }}>
        <View>
          <Text variant="h2" color={colors.textPrimary} fontWeight={900} style={{ lineHeight: 1 }}>
            {profile.firstName} {profile.lastName}
          </Text>

          <View>
            {jobs.map((job, index) => (
              <Text
                key={job.id}
                variant="h2"
                color={colors.primary}
                fontWeight={900}
                style={{ lineHeight: 1 }}
              >
                {index > 0 && <RPDFText style={{ color: colors.textPrimary }}>& </RPDFText>}
                {job.label}
              </Text>
            ))}
          </View>
        </View>

        <Text variant="h4" color={colors.primary} fontWeight={700} style={{ lineHeight: 1.4 }}>
          {profile.headline}
        </Text>

        <Text variant="p" color={colors.textSecondary} fontWeight={900}>
          {profile.shortBiography}
        </Text>
      </View>
    </View>
  );
};

export default ResumeHeader;
