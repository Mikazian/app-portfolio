import MainLayout from "../components/layout/MainLayout";
import UserCard from "../components/features/profile/UserCard";
import UserDegrees from "../components/features/profile/UserDegrees";

const About = () => {
  return (
    <MainLayout title="À propos de moi">
      <UserCard />
      <UserDegrees />
    </MainLayout>
  );
};

export default About;
