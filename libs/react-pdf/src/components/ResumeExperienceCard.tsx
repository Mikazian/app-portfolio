import { View } from '@react-pdf/renderer';
import type { ExperienceType } from '@app-portfolio/shared';
import { convertDate } from '@app-portfolio/helpers';
import { useResumeTheme } from '../contexts';
import Card from './common/Card';
import Label from './common/Label';
import Text from './common/Text';

type ResumeExperienceCardProps = {
  experience: ExperienceType;
};

const ResumeExperienceCard = ({ experience }: ResumeExperienceCardProps) => {
  const colors = useResumeTheme();
  const { job, contract, company, start_date, end_date, shortDescription } = experience;

  return (
    <Card>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          variant="h5"
          color={colors.primary}
          fontWeight={700}
          style={{ lineHeight: 1, flex: 1, minWidth: 0 }}
        >
          {job}
        </Text>

        <Label>{contract}</Label>
      </View>

      <Text
        variant="p"
        color={colors.textPrimary}
        fontWeight={400}
        style={{ lineHeight: 1.4, marginTop: 8 }}
      >
        {company.name}, {company.location.city} ({company.location.zip_code.slice(0, 2)}) {' - '}
        {company.location.country}
      </Text>

      <Text variant="span" color={colors.textSecondary} fontWeight={400}>
        {convertDate(start_date)} - {end_date ? convertDate(end_date) : "Aujourd'hui"}
      </Text>

      <View style={{ borderBottomWidth: 1, borderColor: colors.divider, marginVertical: 8 }} />

      <Text variant="p" color={colors.textSecondary} fontWeight={400} style={{ marginTop: 4 }}>
        {shortDescription}
      </Text>
    </Card>
  );
};

export default ResumeExperienceCard;
