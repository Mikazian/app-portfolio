import { UserDegrees, UserProfile, UserSpeciality, UserSkill, UserExperience, UserHobby, UserLanguages } from '../components/features/profile';
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
    </MainLayout>
  );
};

export default About;
