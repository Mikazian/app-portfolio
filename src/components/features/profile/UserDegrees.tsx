import { useDegree } from "../../../hooks";

import SectionLayout from "../../layout/SectionLayout";
import Card from "../../common/Card";
import Divider from "../../common/Divider";
import Icon from "../../common/Icon";
import Text from "../../common/Text";

const UserDefress = () => {
  const { userDegrees } = useDegree();

  return (
    <SectionLayout title="Certifications">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {userDegrees.map((degree) => (
          <Card key={degree.id}>
            <header className="flex gap-4">
              <Icon
                name="svg-degree"
                size="30"
                color="var(--primary)"
                style="mt-2"
              />
              <div className="flex grow flex-col gap-4">
                <div className="flex flex-col flex-wrap h-[4.3rem] lg:h-auto">
                  <Text as="p" style="font-text-bold">
                    {degree.label}
                  </Text>
                  <Text as="p" style="text-sm truncate">
                    {degree.degree}
                  </Text>
                </div>

                <Divider width="100%" />

                <Text as="p" style="text-sm">
                  {`Année d'obtention : ${degree.year}`}
                </Text>
              </div>
            </header>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default UserDefress;
