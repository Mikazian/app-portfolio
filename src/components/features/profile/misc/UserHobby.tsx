import { useHobby } from '../../../../hooks';
import { AppIconSvgType } from '../../../../enums';
import { aboutSections } from '../../navigation/about-sections';

import SectionLayout from '../../../layout/SectionLayout';
import UserItemCard from './UserItemCard';

const UserHobby = () => {
  const { userHobbies } = useHobby();

  const section = aboutSections.find((s) => s.id === 'centres-interet')!;

  return (
    <SectionLayout id={section.id} title={section.label}>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {userHobbies.map((hobby) => (
          <UserItemCard
            key={hobby.id}
            item={{
              ...hobby,
              icon: { name: hobby.icon as AppIconSvgType, color: 'var(--primary)' },
            }}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserHobby;
