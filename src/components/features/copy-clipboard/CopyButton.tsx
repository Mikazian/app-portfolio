import { useTheme } from "../../../contexts";

import Icon from "../../common/Icon";

interface CopyButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

const CopyButton = ({ onClick, disabled = false }: CopyButtonProps) => {
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
