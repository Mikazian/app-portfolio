import MainLayout from "../components/layout/MainLayout";
import UserProfile from "../components/features/profile/UserProfile";
import UserDegrees from "../components/features/profile/UserDegrees";
import UserSkill from "../components/features/profile/UserSkill";
import UserSpeciality from "../components/features/profile/UserSpeciality";
import UserExperience from "../components/features/profile/UserExperience";
import UserTraining from "../components/features/profile/UserTraining";
import UserHobby from "../components/features/profile/UserHobby";

const About = () => {
  return (
    <MainLayout title="À propos de moi">
      <UserProfile />
      <UserDegrees />
      <UserSpeciality />
      <UserSkill />
      <section className="grid sm:grid-cols-2 gap-x-10">
        <UserExperience />
        <UserTraining />
      </section>
      <UserHobby />
    </MainLayout>
  );
};

export default About;
