import { useJob, useProfile } from "../../../hooks";

import Card from "../../common/Card";
import Divider from "../../common/Divider";
import UserContentCard from "./UserContentCard";
import UserFooterCard from "./UserFooterCard";
import UserHeaderCard from "./UserHeaderCard";

/**
 * Composant carte profil utilisateur
 * @returns JSX.Element
 */
const UserCard = (): JSX.Element => {
  const { profile } = useProfile();
  const { userJobs } = useJob();

  return (
    <Card>
      <section className="flex flex-col grow gap-8">
        <UserHeaderCard profile={profile} jobs={userJobs} />

        <Divider width="100%" />

        <UserContentCard profile={profile} />
        <UserFooterCard />
      </section>
    </Card>
  );
};

export default UserCard;
