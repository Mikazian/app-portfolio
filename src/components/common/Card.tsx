interface CardProps {
  id?: string;
  children: React.ReactNode;
  additionalClass?: string;
}

/**
 * Composant Card
 * @param id - Identifiant pour le scroll
 * @param children - Contenu de la carte
 * @param additionalClass - Style de la carte
 * @returns {JSX.Element}
 */
const Card = ({ id, children, additionalClass }: CardProps): React.JSX.Element => {
  return (
    <div id={id} className={`bg-foreground border border-divider p-4 ${additionalClass}`}>
      {children}
    </div>
  );
};

export default Card;
