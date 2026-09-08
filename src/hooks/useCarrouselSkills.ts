import { useEffect, useState } from 'react';
import { SkillType as Skill, skillValues } from '@app-portfolio/enums';
import { SkillCategoryList } from '@app-portfolio/shared';

interface ScreenType {
  width: number;
  skillsPerPage: number;
}

const skills = skillValues;

const calculateSkillsPerPage = (width: number): number => {
  if (width < 640) return 4;
  if (width < 768) return 6;
  return 9;
};

export const useCarouselSkills = (userSkills: SkillCategoryList) => {
  const [screen, setScreen] = useState<ScreenType>({
    width: window.innerWidth,
    skillsPerPage: calculateSkillsPerPage(window.innerWidth),
  });

  const [activeTab, setActiveTab] = useState<Skill>(Object.keys(userSkills)[0] as Skill);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  const activeSkills =
    activeTab === Object.keys(userSkills)[0] ? userSkills.development : userSkills.design;

  const pages = [];
  for (let i = 0; i < activeSkills.length; i += screen.skillsPerPage) {
    pages.push(activeSkills.slice(i, i + screen.skillsPerPage));
  }

  // Mise à jour de la largeur de l'écran et du nombre de skills par page
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newSkillsPerPage = calculateSkillsPerPage(width);

      if (screen.skillsPerPage !== newSkillsPerPage) {
        setCarouselIndex(0);
      }
      setScreen({ width, skillsPerPage: newSkillsPerPage });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mise à jour de l'index du carousel si l'onglet actif change
  useEffect(() => {
    setCarouselIndex(0);
  }, [activeSkills]);

  const nextPage = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % pages.length);
  };

  const prevPage = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + pages.length) % pages.length);
  };

  return {
    skills,
    activeTab,
    setActiveTab,
    nextPage,
    prevPage,
    pages,
    carouselIndex,
  };
};
