import { useSkill } from '../../../../hooks/useSkill';
import { useCarouselSkills } from '../../../../hooks/useCarrouselSkills';
import { aboutSections } from '../../navigation/about-sections';

import SectionLayout from '../../../layout/SectionLayout';
import ButtonCard from '../../../common/ButtonCard';
import Text from '../../../common/Text';
import UserCarouselSkill from './UserCarouselSkill';
import UserCarouselPagination from './UserCarouselPagination';
import Card from '../../../common/Card';

/**
 * Composant des compétences de l'utilisateur
 * @returns {JSX.Element}
 */
const UserSkill = (): React.JSX.Element => {
  const { userSkills } = useSkill();
  const { skills, activeTab, setActiveTab, pages, carouselIndex, prevPage, nextPage } =
    useCarouselSkills(userSkills);

  const section = aboutSections.find((s) => s.id === 'competences')!;

  return (
    <SectionLayout id={section.id} title={section.label}>
      <div className="grid grid-cols-2 w-full gap-px">
        {skills.map((skill, index) => (
          <ButtonCard
            key={index}
            onClick={() => setActiveTab(skill)}
            isActive={activeTab === skill}
            additionalClass="rounded-none py-4"
          >
            <Text as="p" className="translate-y-px">
              {skill === 'development' ? 'Développement' : 'Graphisme'}
            </Text>
          </ButtonCard>
        ))}
      </div>

      <Card additionalClass="translate-y-[-1px]">
        <UserCarouselSkill pages={pages} carouselIndex={carouselIndex} />
      </Card>

      <UserCarouselPagination
        pages={pages}
        carouselIndex={carouselIndex}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </SectionLayout>
  );
};

export default UserSkill;
