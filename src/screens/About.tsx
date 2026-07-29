import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import { scrollToElement } from '../helpers/scroll';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) return;

    const el = document.getElementById(hash);
    if (!el) return;

    let rafId: number;
    const firstFrame = requestAnimationFrame(() => {
      rafId = requestAnimationFrame(() => {
        scrollToElement(el);
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(rafId);
    };
  }, [location.hash]);

  return (
    <MainLayout>
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
