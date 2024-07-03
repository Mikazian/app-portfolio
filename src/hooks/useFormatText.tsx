import Label from "../components/common/Label";
import { labels as unsortedLabels } from "../types/enums/label.enum";

export const useFormatText = () => {
  const formatTextWithLabels = (text: string) => {
    const sortedLabelsByLength = unsortedLabels.sort(
      (a, b) => b.label.length - a.label.length
    );

    const regex = new RegExp(
      `(${sortedLabelsByLength.map((label) => label.label.replace(/ /g, "\\s+")).join("|")})`,
      "g"
    );

    const segments = text.split(regex);

    return segments.map((segment, index) => {
      const label = sortedLabelsByLength.find(
        (label) => label.label === segment
      );
      return label ? (
        <Label
          key={index}
          text={segment}
          additionalClass="translate-y-[-3px]"
          isOutline
          color={label.color}
        />
      ) : (
        segment
      );
    });
  };

  return { formatTextWithLabels };
};
