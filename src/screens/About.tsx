import UserDegrees from '../components/features/profile/UserDegrees';
import UserProfile from '../components/features/profile/UserProfile';
import UserSpeciality from '../components/features/profile/UserSpeciality';
import UserSkill from '../components/features/profile/UserSkill';
import UserExperience from '../components/features/profile/UserExperience';
import UserHobby from '../components/features/profile/UserHobby';
import MainLayout from '../components/layout/MainLayout';
import UserLanguages from '../components/features/profile/UserLanguages';

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
    </MainLayout>
  );
};

export default About;
