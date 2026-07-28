import { useJob, useProfile } from '../../../hooks';

import Card from '../../common/Card';
import Text from '../../common/Text';
import Divider from '../../common/Divider';
import UserButtonCard from './UserButtonCard';
import Article from '../../common/Article';

/**
 * Composant carte profil utilisateur
 * @returns JSX.Element
 */
const UserProfile = (): React.JSX.Element => {
  const { profile } = useProfile();
  const { userJobs } = useJob();

  return (
    <Card>
      <section className="flex flex-col grow gap-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="h-40 w-40 rounded-full bg-primary self-center">{/* image */}</div>
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
                {index === userJobs.length - 1 && <span className="text-text-secondary">& </span>}
                {job.label}
              </Text>
            ))}
          </div>
        </header>

        <Divider width="100%" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <UserButtonCard text={profile.phone} icon="svg-mobile" />
          <UserButtonCard text={profile.email} icon="svg-mail" />
        </div>

        <Article text={profile.biography} />
      </section>
    </Card>
  );
};

export default UserProfile;
