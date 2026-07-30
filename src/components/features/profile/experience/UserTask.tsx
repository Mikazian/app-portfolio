import Text from '../../../common/Text';
import UserTaskList from './UserTaskList';

type UserTaskProps = {
  tasks: { title: string; description: string }[];
};

const UserTask = ({ tasks }: UserTaskProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Text as="p" className="text-md! text-primary">
        Principales réalisations
      </Text>

      <UserTaskList tasks={tasks} />
    </div>
  );
};

export default UserTask;
