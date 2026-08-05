import { useSpeciality } from '../../../../hooks';
import { AppIconSvgType } from '@app-portfolio/enums';
import { aboutSections } from '../../navigation/about-sections';

import SectionLayout from '../../../layout/SectionLayout';
import UserItemCard from './UserItemCard';

/**
 * Composant des spécialités de l'utilisateur
 * @returns {JSX.Element}
 */
const UserSpeciality = (): React.JSX.Element => {
  const { userSpecialities } = useSpeciality();

  const section = aboutSections.find((s) => s.id === 'specialites')!;

  return (
    <SectionLayout id={section.id} title={section.label}>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {userSpecialities.map((speciality) => (
          <UserItemCard
            key={speciality.id}
            item={{
              ...speciality,
              icon: { name: speciality.icon as AppIconSvgType, color: 'var(--primary)' },
            }}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserSpeciality;
