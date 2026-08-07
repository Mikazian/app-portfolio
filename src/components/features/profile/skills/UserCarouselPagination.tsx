import { DesignSkill, DevelopmentSkill } from '@app-portfolio/shared';
import { AppIconSvg } from '@app-portfolio/enums';
import UserButtonCarousel from './UserButtonCarousel';

type Skill = DevelopmentSkill | DesignSkill;

interface UserCarouselPaginationProps {
  pages: Skill[][];
  carouselIndex: number;
  nextPage: () => void;
  prevPage: () => void;
}

/**
 * Composant de pagination du carrousel utilisateur
 * @param pages - Pages du carrousel
 * @param carouselIndex - Index du carrousel
 * @param nextPage - Action page suivante
 * @param prevPage - Action page précédente
 * @returns {JSX.Element}
 */
const UserCarouselPagination = ({
  pages,
  carouselIndex,
  nextPage,
  prevPage,
}: UserCarouselPaginationProps): React.JSX.Element => {
  return (
    <div className="grid grid-cols-3 items-center min-h-[60px] w-full md:mx-auto md:max-w-[520px] lg:max-w-[330px]">
      <div className="justify-self-start flex items-center justify-center w-[43px] h-[43px]">
        <UserButtonCarousel
          icon={AppIconSvg.ARROW_RIGHT}
          onClick={prevPage}
          disabled={carouselIndex <= 0}
          additionalClass={`${carouselIndex <= 0 ? 'scale-0 invisible' : 'scale-100 visible'}`}
        />
      </div>

      <div className="flex justify-center space-x-2">
        {pages?.map((_, pageIndex) => (
          <span
            key={pageIndex}
            className={`block h-2 rounded-full transition-all duration-500 ease-in-out ${carouselIndex === pageIndex ? 'bg-primary w-12' : 'bg-text-secondary w-2'}`}
          />
        ))}
      </div>

      <div className="justify-self-end flex items-center justify-center w-[43px] h-[43px]">
        <UserButtonCarousel
          icon={AppIconSvg.ARROW_LEFT}
          onClick={nextPage}
          disabled={carouselIndex >= pages.length - 1}
          additionalClass={`${carouselIndex >= pages.length - 1 ? 'scale-0 invisible' : 'scale-100 visible'}`}
        />
      </div>
    </div>
  );
};

export default UserCarouselPagination;
