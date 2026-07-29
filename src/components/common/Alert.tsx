import { type AppIconSvgType } from '../../enums';
import Text from './Text';
import ProgressBar from './ProgressBar';
import Icon from './icon/Icon';

interface AlertProps {
  show: boolean;
  icon: AppIconSvgType;
  message: string;
  variant?: 'default' | 'error';
}
/**
 * Composant Alert — notification slide-in depuis la droite
 * @param show - Afficher ou masquer l'alerte
 * @param icon - Icône à afficher
 * @param message - Texte du message
 * @param variant - Variante de style (default | error)
 * @returns {JSX.Element}
 */
const Alert = ({ show, icon, message, variant = 'default' }: AlertProps): React.JSX.Element => {
  return (
    <section
      className={`flex flex-col fixed z-50 top-[15%] transition-all duration-700 ease-in-out ${show ? 'right-0' : 'right-[-100vw]'}`}
    >
      <div
        className={`flex items-center gap-4 bg-foreground pl-6 pr-8 py-4 border-t border-l border-divider ${variant === 'error' ? 'border-primary' : ''}`}
      >
        <Icon name={icon} className="border border-divider p-2 rounded-md" />
        <Text as="p" className="text-sm">
          {message}
        </Text>
      </div>

      <ProgressBar isActive={show} />
    </section>
  );
};

export default Alert;
