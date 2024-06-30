import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface CopyContextValue {
  isCopied: boolean;
  showCopyAlert: boolean;
  copyToClipboard: (value: string) => Promise<void>;
  error: Error | undefined;
}

interface CopyProviderProps {
  children: React.ReactNode;
}

export const CopyContext = createContext<CopyContextValue | undefined>(
  undefined
);

export const CopyProvider = ({ children }: CopyProviderProps) => {
  const [error, setError] = useState<Error | undefined>();
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [showCopyAlert, setShowCopyAlert] = useState<boolean>(false);

  const copyToClipboard = useCallback(
    async (value: string) => {
      if (isCopied) return;

      try {
        await navigator.clipboard.writeText(value);
        setIsCopied(true);
        setError(undefined);
        setShowCopyAlert(true);

        setTimeout(() => {
          setIsCopied(false);
          setShowCopyAlert(false);
        }, 3000);
      } catch (error) {
        setError(
          error instanceof Error
            ? error
            : new Error("Impossible de copier le texte")
        );
      }
    },
    [isCopied]
  );

  const value = useMemo(
    () => ({
      isCopied,
      showCopyAlert,
      copyToClipboard,
      error,
    }),
    [isCopied, showCopyAlert, copyToClipboard, error]
  );

  return <CopyContext.Provider value={value}>{children}</CopyContext.Provider>;
};

export const useCopy = () => {
  const context = useContext(CopyContext);
  if (context === undefined) {
    throw new Error("useCopy doit être utilisé au sein d'un CopyProvider");
  }
  return context;
};

export default CopyContext;
