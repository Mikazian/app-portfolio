import Text from "./Text";

interface LabelProps {
  text: string;
}

/**
 * Composant Label
 * @param text - Texte du label
 * @returns {JSX.Element}
 */
const Label = ({ text }: LabelProps): JSX.Element => {
  return (
    <div className="inline-flex items-center bg-secondary h-4 rounded-full px-2 truncate">
      <Text style="text-background text-xss font-bold translate-y-[1px] truncate">
        {text}
      </Text>
    </div>
  );
};

export default Label;
