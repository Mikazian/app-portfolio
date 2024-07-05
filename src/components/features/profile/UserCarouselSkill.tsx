import { AppIconSvgType } from "../../../types/enums";
import { DesignSkill, DevelopmentSkill } from "../../../types/interfaces";

import Card from "../../common/Card";
import Icon from "../../common/Icon";
import Label from "../../common/Label";
import Text from "../../common/Text";

type Skill = DevelopmentSkill | DesignSkill;

interface UserCarouselSkillProps {
  readonly pages: Skill[][];
  readonly carouselIndex: number;
}

/**
 * Composant de compétences du carrousel utilisateur
 * @param pages - Pages du carrousel
 * @param carouselIndex - Index du carrousel
 * @returns {JSX.Element}
 */
const UserCarouselSkill = ({
  pages,
  carouselIndex,
}: UserCarouselSkillProps): JSX.Element => {
  return (
    <div className="grid grid-rows-4 sm:grid-rows-3 sm:grid-cols-2 md:grid-cols-3 gap-4 min-h-[384px] max-h-[384px] sm:min-h-[284px] sm:max-h-[284px] overflow-hidden">
      {pages[carouselIndex]?.map((skill: Skill) => (
        <Card key={skill.id}>
          <div className="flex gap-4">
            <div>
              <Icon
                name={skill.icon as AppIconSvgType}
                size="50"
                className={`rounded-md overflow-hidden`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Text>{skill.name}</Text>
              <div className="flex flex-wrap gap-1">
                <Label text={skill.label} />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default UserCarouselSkill;
