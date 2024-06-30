import { useSpeciality } from "../../../hooks";
import { AppIconSvgType } from "../../../types/enums";

import SectionLayout from "../../layout/SectionLayout";
import UserItemCard from "./UserItemCard";

/**
 * Composant des spécialités de l'utilisateur
 * @returns {JSX.Element}
 */
const UserSpeciality = (): JSX.Element => {
  const { userSpecialities } = useSpeciality();

  return (
    <SectionLayout title="Spécialités">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {userSpecialities.map((speciality) => (
          <UserItemCard
            key={speciality.id}
            item={{ ...speciality, icon: speciality.icon as AppIconSvgType }}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserSpeciality;
