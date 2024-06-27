interface ProgressBarProps {
  isActive: boolean;
}

/**
 * Composant Barre de progression
 * @param isActive - Etat de la barre de progression
 * @returns {JSX.Element}
 */
const ProgressBar = ({ isActive }: ProgressBarProps): JSX.Element => {
  return <div className={`progress-bar ${isActive ? "active" : ""}`} />;
};

export default ProgressBar;
