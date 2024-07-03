interface CardProps {
  children: React.ReactNode;
  additionalClass?: string;
}

/**
 * Composant Card
 * @param children - Contenu de la carte
 * @param additionalClass - Style de la carte
 * @returns {JSX.Element}
 */
const Card = ({ children, additionalClass }: CardProps): JSX.Element => {
  return (
    <div
      className={`bg-foreground border border-divider p-4 ${additionalClass}`}
    >
      {children}
    </div>
  );
};

export default Card;
