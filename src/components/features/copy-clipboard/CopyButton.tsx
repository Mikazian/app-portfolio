import { useTheme } from "../../../contexts";

import Icon from "../../common/Icon";

interface CopyButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

/**
 * Composant Bouton de copie
 * @param onClick - Action au clic
 * @param disabled - Etat du bouton
 * @returns {JSX.Element}
 */
const CopyButton = ({
  onClick,
  disabled = false,
}: CopyButtonProps): JSX.Element => {
  const theme = useTheme();

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`btn-copy ${disabled ? "" : "active"}`}
    >
      <Icon
        name="svg-copy"
        color={theme.colors.light}
        style={`btn-icon ${disabled ? "" : "active"}`}
      />
    </button>
  );
};

export default CopyButton;
