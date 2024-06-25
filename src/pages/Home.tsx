import Text from "../components/common/Text";
import HomeLayout from "../components/layout/HomeLayout";

const Home = () => {
  return (
    <HomeLayout>
      <div className="flex items-center px-20 h-full">
        <Text
          as="h1"
          style="font-title-bold text-4xl translate-x-32 -translate-y-32"
        >
          <span className="content-[''] before:w-12 before:h-px before:bg-light before:block flex items-center gap-4">
            Hey! Je suis
          </span>
          <span className="block uppercase text-primary font-title-black text-[6.9rem] leading-none my-4">
            Mike <br />
            Xiong
          </span>
          Développeur Full Stack & Designer
        </Text>
      </div>
    </HomeLayout>
  );
};

export default Home;
