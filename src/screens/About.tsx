import {
  UserDegrees,
  UserProfile,
  UserSpeciality,
  UserSkill,
  UserExperience,
  UserHobby,
  UserLanguages,
} from '../components/features/profile';
import UserContact from '../components/features/profile/misc/UserContact';
import MainLayout from '../components/layout/MainLayout';

const About = () => {
  return (
    <MainLayout title="À propos de moi">
      <UserProfile />
      <UserDegrees />
      <UserSpeciality />
      <UserSkill />
      <UserExperience />
      <UserLanguages />
      <UserHobby />
      <UserContact />
    </MainLayout>
  );
};

export default About;
