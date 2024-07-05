import { ExperienceType, TrainingType } from "../../../types/interfaces";
import { useFormatText } from "../../../hooks";

import Text from "../../common/Text";
import Icon from "../../common/Icon";
import Image from "../../common/Image";
import Card from "../../common/Card";
import Label from "../../common/Label";
import Divider from "../../common/Divider";
import ButtonCard from "../../common/ButtonCard";

interface UserExtendedItemCardProps<T> {
  item: T;
}

const UserExtendedItemCard = <T extends ExperienceType | TrainingType>({
  item,
}: UserExtendedItemCardProps<T>): JSX.Element => {
  const { formatTextWithLabels } = useFormatText();

  return (
    <Card key={item.id} additionalClass="flex flex-col gap-4">
      <header className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 shrink-0 rounded-md overflow-hidden">
            <Image
              src={item.company.logo}
              alt={`Logo de ${item.company.name}`}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex grow h-full justify-between gap-4">
            <div className="flex-wrap self-center">
              <Text as="p" className="font-text-bold text-md text-primary">
                {item.job}
              </Text>
            </div>
            <div className="flex shrink-0 self-start">
              <Label text={item.contract} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Text as="p" className="text-xs">
            {`${item.company.name}, ${item.company.location.city} (${item.company.location.zip_code.slice(0, 2)}) - ${item.company.location.country}`}
          </Text>

          <div className="flex flex-wrap justify-between">
            <Text as="p" className="text-xs">
              {`${item.start_date} - ${item.end_date}`}
            </Text>

            <Text as="p" className="text-xs">
              {`Durée : ${item.duration} mois`}
            </Text>
          </div>
        </div>
      </header>

      <Divider />

      <article>
        <Text as="p" className="text-sm items-center">
          {formatTextWithLabels(item.description)}
        </Text>
      </article>

      {item.projects && (
        <>
          <Divider />

          <footer className="flex flex-col gap-2">
            {item.projects.map((project, index) => (
              <ButtonCard
                key={index}
                onClick={() => {}}
                additionalClass="flex grow justify-between items-center text-start px-2 py-2 gap-2"
              >
                <div className="flex gap-2 items-center">
                  <div className="w-8 h-8 shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={project.logo}
                      alt={`Logo de ${project.name}`}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <Text as="p" className="text-sm">
                      {project.name}
                    </Text>
                    <Text as="p" className="text-xs">
                      {project.type}
                    </Text>
                  </div>
                </div>

                <Icon name="svg-arrow-left" size="20" />
              </ButtonCard>
            ))}
          </footer>
        </>
      )}
    </Card>
  );
};

export default UserExtendedItemCard;
