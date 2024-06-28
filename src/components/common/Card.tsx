interface CardProps {
  children: React.ReactNode;
  style?: string;
}

/**
 * Composant Card
 * @param children - Contenu de la carte
 * @param style - Style de la carte
 * @returns {JSX.Element}
 */
const Card = ({ children, style }: CardProps): JSX.Element => {
  return (
    <div className={`bg-foreground border border-divider p-4 ${style}`}>
      {children}
    </div>
  );
};

export default Card;
