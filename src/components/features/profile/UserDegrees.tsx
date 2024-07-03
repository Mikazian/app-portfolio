import { useDegree } from "../../../hooks";

import SectionLayout from "../../layout/SectionLayout";
import Card from "../../common/Card";
import Divider from "../../common/Divider";
import Icon from "../../common/Icon";
import Text from "../../common/Text";

/**
 * Composant des certifications de l'utilisateur
 * @returns {JSX.Element}
 */
const UserDegress = (): JSX.Element => {
  const { userDegrees } = useDegree();

  return (
    <SectionLayout title="Certifications">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {userDegrees.map((degree) => (
          <Card key={degree.id} additionalClass="flex flex-col gap-4">
            <div className="flex gap-4">
              <Icon
                name="svg-degree"
                size="30"
                color="var(--primary)"
                className="mt-2"
              />
              <div className="flex grow flex-col gap-4">
                <div className="flex flex-col flex-wrap sm:h-[4.3rem] lg:h-auto">
                  <Text as="p" className="font-text-bold">
                    {degree.label}
                  </Text>
                  <Text as="p" className="text-sm truncate">
                    {degree.degree}
                  </Text>
                </div>
              </div>
            </div>

            <Divider width="100%" />

            <Text as="p" className="text-sm">
              {`Année d'obtention : ${degree.year}`}
            </Text>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserDegress;
