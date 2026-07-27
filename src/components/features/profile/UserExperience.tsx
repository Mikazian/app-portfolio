import { useExperience } from '../../../hooks';

import SectionLayout from '../../layout/SectionLayout';
import UserExtendedItemCard from './UserExtendedItemCard';

const UserExperience = () => {
  const { userExperiences } = useExperience();

  return (
    <SectionLayout title="Expériences">
      <div className="flex flex-col gap-6">
        {userExperiences.map((experience) => (
          <UserExtendedItemCard key={experience.id} item={experience} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserExperience;
