import { Text as RPDFText, View } from '@react-pdf/renderer';
import { useResumeTheme } from '../contexts';
import { resumeData } from '../data/resume';
import Avatar from './common/Avatar';
import Text from './common/Text';

const ResumeHeader = () => {
  const colors = useResumeTheme();
  const { profile, jobs } = resumeData;

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.dark,
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 20,
        borderBottomWidth: 1,
        borderColor: colors.secondary,
      }}
    >
      <Avatar size={120} style={{ backgroundColor: 'white' }} />

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

        <Text variant="p" color={colors.textSecondary} fontWeight={900}>
          {profile.shortBiography}
        </Text>
      </View>
    </View>
  );
};

export default ResumeHeader;
