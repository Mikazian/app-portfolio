interface LabelProps {
  text: string;
  color?: string;
  isOutline?: boolean;
  additionalClass?: string;
}

const Label = ({
  text,
  color,
  isOutline = false,
  additionalClass,
}: LabelProps): JSX.Element => {
  const outlineStyle = {
    color: isOutline ? color : undefined,
    borderColor: isOutline ? color : undefined,
    borderWidth: isOutline ? "1px" : undefined,
    borderStyle: isOutline ? "solid" : undefined,
  };

  return (
    <span
      className={`inline-flex items-center h-4 rounded-full px-2 text-xss font-bold ${!isOutline && "bg-secondary text-background"} ${additionalClass}`}
      style={outlineStyle}
    >
      <span className="translate-y-px">{text}</span>
    </span>
  );
};

export default Label;
