import { AppIconSvg } from '@app-portfolio/enums';
import { ExperienceType, TrainingType } from '@app-portfolio/shared';
import { formatDuration } from '@app-portfolio/helpers';
import Article from '../../../common/Article';
import ButtonCard from '../../../common/ButtonCard';
import Card from '../../../common/Card';
import Divider from '../../../common/Divider';
import Icon from '../../../common/icon/Icon';
import Image from '../../../common/Image';
import Label from '../../../common/Label';
import Text from '../../../common/Text';
import UserTask from './UserTask';
import StackList from './StackList';

interface UserExtendedItemCardProps<T> {
  item: T;
}

const UserExtendedItemCard = <T extends ExperienceType | TrainingType>({
  item,
}: UserExtendedItemCardProps<T>): React.JSX.Element => {
  return (
    <Card key={item.id} additionalClass="flex flex-col gap-4">
      <header className="flex flex-col gap-4">
        <div className="flex grow h-full justify-between gap-4">
          <div className="flex-wrap self-center">
            <Text as="p" className="text-lg! font-title-bold text-primary">
              {item.job}
            </Text>
          </div>
          <div className="flex shrink-0 self-start">
            <Label text={item.contract} />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Text as="p" className="text-sm!">
            {`${item.company.name}, ${item.company.location.city} (${item.company.location.zip_code.slice(0, 2)}) - ${item.company.location.country}`}
          </Text>

          <div className="flex flex-wrap justify-between">
            <Text as="p" className="text-xs! text-text-secondary">
              {`${item.start_date} - ${item.end_date ?? "Aujourd'hui"}`}
            </Text>

            <Text as="p" className="text-xs! text-text-secondary">
              {`Durée : ${formatDuration(Number(item.duration))}`}
            </Text>
          </div>
        </div>
      </header>

      <Divider />

      <Article nbOfLine={4} className="items-center" text={item.description}>
        {item.tasks ? (
          <div className="flex flex-col gap-4 mt-4">
            <Divider />

            <UserTask tasks={item.tasks} />
          </div>
        ) : null}
      </Article>

      {item.projects || item.stacks ? (
        <>
          <Divider />

          <footer className="flex flex-col gap-4">
            {item.projects?.map((project, index) => (
              <div key={index} className="flex gap-2 items-stretch">
                <ButtonCard
                  onClick={() =>
                    project.repository &&
                    window.open(project.repository, '_blank', 'noopener,noreferrer')
                  }
                  additionalClass="flex grow justify-between items-center text-start px-2 h-12 gap-2"
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
                      <Text as="p" className="text-sm!">
                        {project.name}
                      </Text>
                      <Text as="p" className="text-xs! text-text-secondary">
                        {project.type}
                      </Text>
                    </div>
                  </div>

                  <Icon name={AppIconSvg.ARROW_LEFT} size="20" />
                </ButtonCard>

                {project.figma ? (
                  <ButtonCard
                    onClick={() => window.open(project.figma, '_blank', 'noopener,noreferrer')}
                    additionalClass="shrink-0 w-12 h-12 grid place-items-center"
                  >
                    <Icon name={AppIconSvg.FIGMA_FILLED} size="20" />
                  </ButtonCard>
                ) : null}
              </div>
            ))}

            <StackList stacks={item.stacks} />
          </footer>
        </>
      ) : null}
    </Card>
  );
};

export default UserExtendedItemCard;
