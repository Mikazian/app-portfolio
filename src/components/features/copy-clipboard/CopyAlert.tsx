import { useCopy } from "../../../contexts/CopyContext";

import Text from "../../common/Text";
import ProgressBar from "../../common/ProgressBar";
import Icon from "../../common/Icon";

/**
 * Composant Alerte de copie
 * @returns {JSX.Element}
 */
const CopyAlert = (): JSX.Element => {
  const { showCopyAlert } = useCopy();

  return (
    <section
      className={`flex flex-col fixed z-50 top-[15%] transition-all duration-700 ease-in-out ${showCopyAlert ? "right-0" : "right-[-100vw]"}`}
    >
      <div className="flex items-center gap-4 bg-foreground px-6 py-4 border-t border-l border-divider">
        <Icon name="svg-copy" style="border border-divider p-2 rounded-md" />
        <Text as="p" style="w-28">
          Copié dans le presse-papier
        </Text>
      </div>
      <ProgressBar isActive={showCopyAlert} />
    </section>
  );
};

export default CopyAlert;
