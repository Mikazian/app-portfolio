import { useCopy } from "../../../contexts";
import { AppIconSvgType } from "../../../types/enums";
import ButtonCard from "../../common/ButtonCard";

import Icon from "../../common/Icon";
import Text from "../../common/Text";

interface UserButtonCardProps {
  text: string;
  icon: AppIconSvgType;
}

/**
 * Composant Bouton de carte utilisateur
 * @param text - Texte du bouton
 * @param icon - Nom de l'icône
 * @returns {JSX.Element}
 */
const UserButtonCard = ({ text, icon }: UserButtonCardProps): JSX.Element => {
  const { isCopied, copyToClipboard } = useCopy();

  return (
    <div className="flex justify-between gap-6 px-4 py-6 border border-divider rounded-sm">
      <div className="flex items-center gap-4 truncate">
        <Icon name={icon} size="25" color="var(--primary)" />
        <Text
          as="p"
          className="font-text-bold translate-y-pxs text-sm truncate"
        >
          {text}
        </Text>
      </div>
      <ButtonCard
        onClick={() => copyToClipboard(text)}
        disabled={isCopied}
        showModal
      >
        <Icon
          name="svg-copy"
          color="var(--onbackground)"
          className="btn-icon"
        />
      </ButtonCard>
    </div>
  );
};

export default UserButtonCard;
