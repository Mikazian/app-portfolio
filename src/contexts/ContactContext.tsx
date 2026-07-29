import { createContext, useContext, useMemo, useState } from 'react';

type AlertType = 'success' | 'error';

interface ContactContextValue {
  showContactAlert: boolean;
  alertMessage: string;
  alertType: AlertType;
  triggerContactAlert: (type: AlertType, message: string) => void;
}

interface ContactProviderProps {
  children: React.ReactNode;
}

export const ContactContext = createContext<ContactContextValue | undefined>(undefined);

export const ContactProvider = ({ children }: ContactProviderProps) => {
  const [showContactAlert, setShowContactAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [alertType, setAlertType] = useState<AlertType>('success');

  const triggerContactAlert = (type: AlertType, message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowContactAlert(true);

    setTimeout(() => {
      setShowContactAlert(false);
    }, 3000);
  };

  const value = useMemo(
    () => ({
      showContactAlert,
      alertMessage,
      alertType,
      triggerContactAlert,
    }),
    [showContactAlert, alertMessage, alertType, triggerContactAlert],
  );

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
};

export const useContact = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact doit être utilisé au sein d'un ContactProvider");
  }
  return context;
};

export default ContactContext;
