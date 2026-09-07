import { useLanguage } from '../../../../contexts';
import Text from '../../../common/Text';
import UserTaskList from './UserTaskList';

type UserTaskProps = {
  tasks: { title: string; description: string }[];
};

const UserTask = ({ tasks }: UserTaskProps) => {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col gap-4">
      <Text as="p" className="text-lg! font-title-bold text-primary">
        {translate('task.achievements')}
      </Text>

      <UserTaskList tasks={tasks} />
    </div>
  );
};

export default UserTask;
