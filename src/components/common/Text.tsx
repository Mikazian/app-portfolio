interface TextProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  style?: string;
}
/**
 * Composant Texte
 * @param as - Balise HTML du composant
 * @param children - Contenu du texte
 * @param style - Style Tailwind CSS
 * @returns {JSX.Element}
 */
const Text = ({
  as: Component = "p",
  children,
  style,
}: TextProps): JSX.Element => {
  return <Component className={style}>{children}</Component>;
};

export default Text;
