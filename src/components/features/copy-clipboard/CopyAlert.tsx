import { useCopy } from '../../../contexts/CopyContext';
import { AppIconSvg } from '../../../enums';
import Alert from '../../common/Alert';

/**
 * Composant Alerte de copie
 * @returns {JSX.Element}
 */
const CopyAlert = (): React.JSX.Element => {
  const { showCopyAlert } = useCopy();

  return (
    <Alert
      show={showCopyAlert}
      icon={AppIconSvg.COPY}
      message="Copié dans le presse-papier"
    />
  );
};

export default CopyAlert;
