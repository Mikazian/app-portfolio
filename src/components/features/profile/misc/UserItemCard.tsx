import { AppIconSvgType } from '../../../../enums';

import Card from '../../../common/Card';
import Divider from '../../../common/Divider';
import Icon from '../../../common/icon/Icon';
import Text from '../../../common/Text';

interface UserItemCardProps<T> {
  item: T;
}

interface Icon {
  name: AppIconSvgType;
  color?: string;
}

interface Item {
  id: number | string;
  label: string;
  icon: Icon;
  caption?: string;
  description?: string;
}

/**
 * Composant d'élément de la carte utilisateur
 * @param item - Élément
 * @returns {JSX.Element}
 */
const UserItemCard = <T extends Item>({ item }: UserItemCardProps<T>): React.JSX.Element => {
  return (
    <Card key={item.id} additionalClass="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2 py-2">
        <Icon name={item.icon.name} size="30" color={item.icon.color} />
        <Text as="p" className="font-text-bold translate-y-[2px] text-center">
          {item.label}
        </Text>

        <Text as="p" className="text-sm text-center text-text-secondary">
          {item.caption}
        </Text>
      </div>

      {item.description ? (
        <>
          <Divider />

          <Text as="p" className="text-sm text-text-secondary">
            {item.description}
          </Text>
        </>
      ) : undefined}
    </Card>
  );
};

export default UserItemCard;
