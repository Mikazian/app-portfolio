import { useLanguage } from '../../../../hooks';
import { AppIconSvgType } from '../../../../enums';
import SectionLayout from '../../../layout/SectionLayout';
import UserItemCard from './UserItemCard';

const UserLanguages = () => {
  const { userLanguages } = useLanguage();

  return (
    <SectionLayout title="Langues">
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
