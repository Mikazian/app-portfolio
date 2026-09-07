import Text from '../../../common/Text';

type UserTaskListItemProps = {
  title: string;
  description: string;
};

const UserTaskListItem = ({ title, description }: UserTaskListItemProps) => {
  return (
    <li>
      <div className="bg-foreground border border-divider border-l-[4px] border-l-[color:var(--primary)] flex flex-col p-4 gap-4">
        <Text as="p" className="text-md! font-title-bold text-primary">
          {title}
        </Text>

        <Text as="p" className="text-sm! text-text-secondary">
          {description}
        </Text>
      </div>
    </li>
  );
};

type UserTaskListProps = {
  tasks: UserTaskListItemProps[];
};

const UserTaskList = ({ tasks }: UserTaskListProps) => {
  return (
    <ul className="flex flex-col gap-4">
      {tasks.map((task, key) => (
        <UserTaskListItem key={`index-${key}`} title={task.title} description={task.description} />
      ))}
    </ul>
  );
};

export default UserTaskList;
