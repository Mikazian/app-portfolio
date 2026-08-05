import { AppIconSvg } from '@app-portfolio/enums';
import { useContact } from '../../../contexts/ContactContext';
import Alert from '../../common/Alert';

/**
 * Composant Alerte d'envoi de message
 * @returns {JSX.Element}
 */
const ContactAlert = (): React.JSX.Element => {
  const { showContactAlert, alertMessage, alertType } = useContact();

  return (
    <Alert
      show={showContactAlert}
      icon={AppIconSvg.MAIL}
      message={alertMessage}
      variant={alertType === 'error' ? 'error' : 'default'}
    />
  );
};

export default ContactAlert;
