import MainLayout from "../components/layout/MainLayout";
import UserCard from "../components/features/profile/UserCard";
import UserDegrees from "../components/features/profile/UserDegrees";
import UserSkill from "../components/features/profile/UserSkill";
import UserSpeciality from "../components/features/profile/UserSpeciality";

const About = () => {
  return (
    <MainLayout title="À propos de moi">
      <UserCard />
      <UserDegrees />
      <UserSpeciality />
      <UserSkill />
    </MainLayout>
  );
};

export default About;
