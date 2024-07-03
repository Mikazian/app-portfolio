import { useTraining } from "../../../hooks/useTraining";
import SectionLayout from "../../layout/SectionLayout";
import UserExtendedItemCard from "./UserExtendedItemCard";

const UserTraining = () => {
  const { userTrainings } = useTraining();
  return (
    <SectionLayout title="Formations">
      <div className="flex flex-col gap-6">
        {userTrainings.map((experience) => (
          <UserExtendedItemCard key={experience.id} item={experience} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserTraining;
