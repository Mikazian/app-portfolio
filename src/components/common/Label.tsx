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
    <div className="inline-flex items-center bg-light h-4 rounded-full px-2">
      <Text style="text-underground text-xss font-bold translate-y-[1px]">
        {text}
      </Text>
    </div>
  );
};

export default Label;
