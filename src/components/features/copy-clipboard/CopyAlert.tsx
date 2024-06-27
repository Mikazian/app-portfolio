import { useCopy } from "../../../contexts/CopyContext";
import ProgressBar from "../../common/ProgressBar";

import Text from "../../common/Text";
import CopyButton from "./CopyButton";

const CopyAlert = () => {
  const { showCopyAlert } = useCopy();

  return (
    <section
      className={`flex flex-col fixed z-50 top-[15%] transition-all duration-700 ease-in-out ${showCopyAlert ? "right-0" : "right-[-100vw]"}`}
    >
      <div className="flex items-center gap-4 bg-foreground px-6 py-4 border-t border-l border-border">
        <CopyButton disabled />
        <Text as="p" style="w-28">
          Copié dans le presse-papier
        </Text>
      </div>
      <ProgressBar isActive={showCopyAlert} />
    </section>
  );
};

export default CopyAlert;
