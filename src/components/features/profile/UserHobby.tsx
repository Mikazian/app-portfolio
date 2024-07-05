import { useHobby } from "../../../hooks";
import { AppIconSvgType } from "../../../types/enums";

import SectionLayout from "../../layout/SectionLayout";
import UserItemCard from "./UserItemCard";

const UserHobby = () => {
  const { userHobbies } = useHobby();
  return (
    <SectionLayout title="Spécialités">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {userHobbies.map((hobby) => (
          <UserItemCard
            key={hobby.id}
            item={{ ...hobby, icon: hobby.icon as AppIconSvgType }}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserHobby;
