import { useJob, useProfile } from "../../../hooks";

import Card from "../../common/Card";
import Text from "../../common/Text";
import Divider from "../../common/Divider";
import UserButtonCard from "./UserButtonCard";
import Button from "../../common/Button";

/**
 * Composant carte profil utilisateur
 * @returns JSX.Element
 */
const UserProfile = (): JSX.Element => {
  const { profile } = useProfile();
  const { userJobs } = useJob();

  return (
    <Card>
      <section className="flex flex-col grow gap-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="h-40 w-40 rounded-full bg-primary self-center">
            {/* image */}
          </div>
          <div>
            <Text
              as="p"
              className="font-title-bold text-4xl leading-tight text-center sm:text-left"
            >
              {profile.firstName} {profile.lastName}
            </Text>
            {userJobs.map((job, index) => (
              <Text
                key={job.id}
                as="p"
                className="font-title-bold text-4xl text-primary leading-tight text-center sm:text-left"
              >
                {index === userJobs.length - 1 && (
                  <span className="text-onbackground">& </span>
                )}
                {job.label}
              </Text>
            ))}
          </div>
        </header>

        <Divider width="100%" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <UserButtonCard text={profile.phone} icon="svg-phone" />
          <UserButtonCard text={profile.email} icon="svg-mail" />
        </div>

        <article>
          {profile.biography.split("\n").map((str, index) => (
            <Text key={index} as="p" className="text-sm">
              {str}
            </Text>
          ))}
        </article>

        <footer className="text-right">
          <Button
            type="button"
            // TODO: Ajouter le téléchargement du PDF
            onClick={() => console.log("pressed")}
            additionalClass="text-lg"
          >
            Télécharger CV
          </Button>
        </footer>
      </section>
    </Card>
  );
};

export default UserProfile;
