import { Stack, StackColor, StackI18n } from '../../../../enums/stack.enum';
import Label from '../../../common/Label';

interface StackListProps {
  stacks?: Stack[];
}

/**
 * Composant Liste de Stacks
 * @param stacks - Liste des stacks à afficher
 * @returns {JSX.Element}
 */
const StackList = ({ stacks }: StackListProps): React.JSX.Element | null => {
  if (!stacks || stacks.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {stacks.map((stack, key) => (
        <Label
          key={`stack-${key}`}
          text={StackI18n[stack]}
          color={StackColor[stack]}
          isOutline
        />
      ))}
    </div>
  );
};

export default StackList;
