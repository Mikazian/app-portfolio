import { useCallback, useState } from "react";

export const useClipboard = (timeoutDuration: number = 2000) => {
  const [error, setError] = useState<Error | undefined>();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [showCopyAlert, setShowCopyAlert] = useState<boolean>(false);

  console.log("showCopyAlert", showCopyAlert);

  const copyToClipboard = useCallback(
    async (value: string) => {
      try {
        await navigator.clipboard.writeText(value);
        console.log("value", value);
        setIsCopied(true);
        setError(undefined);
        setShowCopyAlert(true);

        setTimeout(() => {
          setIsCopied(false);
          setShowCopyAlert(false);
        }, timeoutDuration);
      } catch (error) {
        setError(
          error instanceof Error
            ? error
            : new Error("Impossible de copier le texte")
        );
      }
    },
    [timeoutDuration]
  );

  return { isCopied, showCopyAlert, copyToClipboard, error };
};
