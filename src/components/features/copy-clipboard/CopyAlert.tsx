import { useCopy } from '../../../contexts/CopyContext';
import { useLanguage } from '../../../contexts';
import { AppIconSvg } from '@app-portfolio/enums';
import Alert from '../../common/Alert';

/**
 * Composant Alerte de copie
 * @returns {JSX.Element}
 */
const CopyAlert = (): React.JSX.Element => {
  const { showCopyAlert } = useCopy();
  const { translate } = useLanguage();

  return <Alert show={showCopyAlert} icon={AppIconSvg.COPY} message={translate('copy.copied')} />;
};

export default CopyAlert;
