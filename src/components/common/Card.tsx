interface CardProps {
  children: React.ReactNode;
  style?: string;
}

const Card = ({ children, style }: CardProps) => {
  return (
    <div className={`bg-foreground border border-border p-4 ${style}`}>
      {children}
    </div>
  );
};

export default Card;
