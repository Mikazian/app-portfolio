import { useCopy } from "../../../contexts";
import { AppIconSvgType } from "../../../types/enums";

import Icon from "../../common/Icon";
import Text from "../../common/Text";
import CopyButton from "../copy-clipboard/CopyButton";

interface UserButtonCardProps {
  text: string;
  icon: AppIconSvgType;
}

/**
 * Composant Bouton de profil utilisateur
 * @param text - Texte du bouton
 * @param icon - Icone du bouton
 * @returns {JSX.Element}
 */
const UserButtonCard = ({ text, icon }: UserButtonCardProps): JSX.Element => {
  const { isCopied, copyToClipboard } = useCopy();

  return (
    <div className="flex justify-between gap-6 px-4 py-6 border border-divider rounded-sm">
      <div className="flex items-center gap-4 truncate">
        <Icon name={icon} size="25" color="var(--onbackground)" />
        <Text as="p" style="font-text-bold translate-y-pxs text-sm truncate">
          {text}
        </Text>
      </div>
      <CopyButton onClick={() => copyToClipboard(text)} disabled={isCopied} />
    </div>
  );
};

export default UserButtonCard;
