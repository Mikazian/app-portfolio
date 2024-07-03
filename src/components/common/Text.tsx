import { TextType } from "../../types/enums";

interface TextProps {
  as?: TextType;
  children: React.ReactNode;
  className?: string;
}
/**
 * Composant Texte
 * @param as - Balise HTML du composant
 * @param children - Contenu du texte
 * @param className - Style Tailwind CSS
 * @returns {JSX.Element}
 */
const Text = ({
  as: Component = "p",
  children,
  className,
}: TextProps): JSX.Element => {
  return <Component className={className}>{children}</Component>;
};

export default Text;
