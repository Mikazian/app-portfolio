interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
  style?: string;
}
/**
 * Composant Button
 * @param children - Contenu du button
 * @param type - Type du button
 * @param onClick - Action du button
 * @param onMouseEnter - Action au survol du button
 * @param onMouseLeave - Action à la sortie du survol du button
 * @param disabled - Etat du button
 * @param style - Style Tailwind CSS
 * @returns {JSX.Element}
 */
const Button = ({
  children,
  type,
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled,
  style,
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      className={`px-4 py-1 border-2 border-primary ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
