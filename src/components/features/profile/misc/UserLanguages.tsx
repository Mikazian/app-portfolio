import { useLanguage } from '../../../../hooks';
import { AppIconSvgType } from '@app-portfolio/enums';
import { useLanguage as useAppLanguage } from '../../../../contexts';
import { aboutSections, getSectionLabel } from '../../navigation/about-sections';
import SectionLayout from '../../../layout/SectionLayout';
import UserItemCard from './UserItemCard';

const UserLanguages = () => {
  const { userLanguages } = useLanguage();
  const { locale } = useAppLanguage();

  const section = aboutSections.find((s) => s.id === 'langues')!;

  return (
    <SectionLayout id={section.id} title={getSectionLabel(section, locale)}>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {userLanguages.map((language) => (
          <UserItemCard
            key={language.id}
            item={{
              ...language,
              icon: { name: language.icon as AppIconSvgType },
            }}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserLanguages;
