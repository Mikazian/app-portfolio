import Text from './Text';

const Header = () => {
  return (
    <header className="relative z-20 w-full h-screen px-4">
      <div className="flex items-center px-4 lg:px-20 h-full">
        <Text
          as="h1"
          className="font-title-bold text-4xl sm:translate-x-20 lg:translate-x-32 -translate-y-32"
        >
          <span className="content-[''] before:w-12 before:h-px before:bg-text-primary before:block flex items-center gap-4">
            Hey! Je suis
          </span>
          <span className="block uppercase text-primary font-title-black text-[6.9rem] leading-none my-4">
            Mike <br />
            Xiong
          </span>
          Développeur Full Stack & UX/UI Designer
        </Text>
      </div>
    </header>
  );
};

export default Header;
