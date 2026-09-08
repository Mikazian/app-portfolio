import { useLanguage } from '../../contexts';
import { AppImg } from '@app-portfolio/enums';
import Text from './Text';
import Image from './Image';

const Header = () => {
  const { translate } = useLanguage();

  return (
    <header className="relative z-20 w-full min-h-screen px-4 pt-20 overflow-hidden">
      <Image
        src={AppImg.HEADER_BACKGROUND}
        alt="Background header"
        className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none"
      />
      <div className="flex items-center px-4 lg:px-20 min-h-[calc(100vh-5rem)] relative z-10">
        <Text
          as="h1"
          className="text-white text-shadow font-title-bold text-4xl sm:translate-x-20 lg:translate-x-32 -translate-y-32 [@media(max-height:768px)]:translate-y-0"
        >
          <span className="content-[''] before:w-12 before:h-px before:bg-white before:block flex items-center gap-4">
            {translate('header.hello')}
          </span>
          <span className="block uppercase text-primary font-title-black text-[6.9rem] leading-none my-4">
            Mike <br />
            Xiong
          </span>
          {translate('header.role')}
        </Text>
      </div>
    </header>
  );
};

export default Header;
