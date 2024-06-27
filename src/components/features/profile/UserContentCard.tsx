import { ProfileType } from "../../../types/interfaces";

import Text from "../../common/Text";
import UserButtonCard from "./UserButtonCard";

interface UserContentCardProps {
  profile: ProfileType;
}

const UserContentCard = ({ profile }: UserContentCardProps) => {
  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UserButtonCard text={profile.phone} icon="svg-phone" />
        <UserButtonCard text={profile.email} icon="svg-mail" />
      </section>

      <article>
        {profile.biography.split("\n").map((str, index) => (
          <Text key={index} as="p">
            {str}
          </Text>
        ))}
      </article>
    </>
  );
};

export default UserContentCard;
