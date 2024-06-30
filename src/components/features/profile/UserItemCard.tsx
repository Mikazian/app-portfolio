import { AppIconSvgType } from "../../../types/enums";

import Card from "../../common/Card";
import Divider from "../../common/Divider";
import Icon from "../../common/Icon";
import Text from "../../common/Text";

interface UserItemCardProps<T> {
  item: T;
}

interface Item {
  id: string;
  label: string;
  icon: AppIconSvgType;
  description?: string;
}

/**
 * Composant d'élément de la carte utilisateur
 * @param item - Élément
 * @returns {JSX.Element}
 */
const UserItemCard = <T extends Item>({
  item,
}: UserItemCardProps<T>): JSX.Element => {
  return (
    <Card key={item.id} style="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2 py-2">
        <Icon name={item.icon} size="30" color="var(--primary)" />
        <Text as="p" style="font-text-bold translate-y-[2px] text-center">
          {item.label}
        </Text>
      </div>
      {item.description ? (
        <>
          <Divider width="100%" />
          <Text as="p" style="text-sm">
            {item.description}
          </Text>
        </>
      ) : undefined}
    </Card>
  );
};

export default UserItemCard;
