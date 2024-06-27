import { JobType, ProfileType } from "../../../types/interfaces";
import Text from "../../common/Text";

interface UserHeaderCardProps {
  profile: ProfileType;
  jobs: JobType[];
}

/**
 * Composant Header de la carte profil utilisateur
 * @param profile - Informations du profil utilisateur
 * @param jobs - Liste des emplois
 * @returns {JSX.Element}
 */
const UserHeaderCard = ({
  profile,
  jobs,
}: UserHeaderCardProps): JSX.Element => {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
      <div className="h-40 w-40 rounded-full bg-primary self-center">
        {/* image */}
      </div>
      <div>
        <Text
          as="p"
          style="font-title-bold text-4xl leading-tight text-center sm:text-left"
        >
          {profile.firstName} {profile.lastName}
        </Text>
        {jobs.map((job, index) => (
          <Text
            key={job.id}
            as="p"
            style="font-title-bold text-4xl text-primary leading-tight text-center sm:text-left"
          >
            {index === jobs.length - 1 && (
              <span className="text-light">& </span>
            )}
            {job.label}
          </Text>
        ))}
      </div>
    </header>
  );
};

export default UserHeaderCard;
