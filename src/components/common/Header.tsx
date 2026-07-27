import Text from './Text';

const Header = ({ title }: { title: string }) => {
  return (
    <header className="flex items-center justify-center relative z-20 h-screen px-4">
      <Text as="h1" className="font-title-black text-6xl uppercase tracking-wider text-center">
        {title}
      </Text>
    </header>
  );
};

export default Header;
