import { useSkill } from "../../../hooks/useSkill";

import SectionLayout from "../../layout/SectionLayout";
import Card from "../../common/Card";
import Text from "../../common/Text";

const UserSkill = () => {
  const { userSkills } = useSkill();

  return (
    <SectionLayout title="Compétences">
      <Card></Card>
    </SectionLayout>
  );
};

export default UserSkill;
