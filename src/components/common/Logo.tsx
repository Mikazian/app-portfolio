import { useTheme } from '../../contexts';
import { AppImg } from '@app-portfolio/enums';
import Image from './Image';

const Logo = () => {
  const { theme } = useTheme();

  const source = theme === 'dark' ? AppImg.LOGO_WHITE : AppImg.LOGO_BLACK;

  return <Image src={source} alt="logo" className="h-full object-cover pr-8" />;
};

export default Logo;
