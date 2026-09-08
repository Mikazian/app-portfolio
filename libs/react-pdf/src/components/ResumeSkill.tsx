import { View } from '@react-pdf/renderer';
import {
  Stack,
  StackCategory,
  StackCategoryI18n,
  StackColor,
  StackIcon,
  StackI18n,
} from '@app-portfolio/enums';
import type { SkillShortList } from '@app-portfolio/shared';
import { resumeColors } from '../styles';
import { getResumeData } from '../data/resume';
import { pdfT } from '../i18n';
import type { Locale } from '@app-portfolio/enums';
import LabelIcon from './common/LabelIcon';
import ResumeSection from './ResumeSection';
import Text from './common/Text';

const CATEGORIES: { key: keyof SkillShortList; category: StackCategory }[] = [
  { key: 'frontend', category: StackCategory.FRONTEND },
  { key: 'backend', category: StackCategory.BACKEND },
  { key: 'devOps', category: StackCategory.DEV_OPS },
  { key: 'cloud', category: StackCategory.CLOUD },
  { key: 'tools', category: StackCategory.TOOLS },
  { key: 'uiUx', category: StackCategory.UX_UI },
];

const getStack = (key: string): Stack | undefined =>
  Object.values(Stack).find((value) => value.toLowerCase() === key.toLowerCase());

type ResumeSkillProps = { locale: Locale };

const ResumeSkill = ({ locale }: ResumeSkillProps) => {
  const colors = resumeColors;
  const { skills } = getResumeData(locale).skills.shortList;

  return (
    <ResumeSection title={pdfT(locale, 'section.skills')} lineLength="short">
      <View style={{ flexDirection: 'column', gap: 12 }}>
        {CATEGORIES.map(({ key, category }) => {
          const group = skills[key];

          if (group.length === 0) {
            return null;
          }

          return (
            <View key={category}>
              <Text variant="h5" color={colors.primary} fontWeight={700} style={{ lineHeight: 1 }}>
                {StackCategoryI18n[category][locale]}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 4,
                  marginTop: 8,
                }}
              >
                {group.map((skill) => {
                  const stack = getStack(skill);

                  return (
                    <LabelIcon
                      key={skill}
                      icon={stack ? StackIcon[stack] : undefined}
                      color={stack ? StackColor[stack] : undefined}
                    >
                      {stack ? StackI18n[stack] : skill}
                    </LabelIcon>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
    </ResumeSection>
  );
};

export default ResumeSkill;
