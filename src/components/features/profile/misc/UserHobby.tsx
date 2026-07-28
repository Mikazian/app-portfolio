import { useHobby } from '../../../../hooks';
import { AppIconSvgType } from '../../../../enums';

import SectionLayout from '../../../layout/SectionLayout';
import UserItemCard from './UserItemCard';

const UserHobby = () => {
  const { userHobbies } = useHobby();

  return (
    <SectionLayout title="Centres d'intérêt">
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
