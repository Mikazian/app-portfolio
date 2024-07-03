interface ButtonCardProps {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
  showModal?: boolean;
  additionalClass?: string;
  children: React.ReactNode;
}

/**
 * Composant Bouton Carte
 * @param type - Type du bouton
 * @param onClick - Fonction à exécuter au clic
 * @param disabled - Désactiver le bouton
 * @param isActive - Activer le bouton
 * @param showModal - Afficher la modal
 * @param additionalClass - Style du bouton
 * @param children - Éléments enfants
 * @returns {JSX.Element}
 */
const ButtonCard = ({
  type = "button",
  disabled,
  onClick,
  isActive,
  showModal = false,
  additionalClass,
  children,
}: ButtonCardProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${additionalClass} ${isActive ? "bg-primary border-primary" : "bg-foreground"} ${disabled ? "unactive" : "active"} ${showModal ? "active-modal" : "unactive-modal"}`}
    >
      {children}
    </button>
  );
};

export default ButtonCard;
