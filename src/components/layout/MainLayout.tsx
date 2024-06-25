import Navbar from "../features/navigation/Navbar";
import Transition from "./Transition";
import Footer from "../common/Footer";
import Text from "../common/Text";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <header className="flex items-center justify-center h-screen relative z-20">
        <Text
          as="h1"
          style="font-title-black text-6xl uppercase tracking-wider text-center"
        >
          {title}
        </Text>
      </header>
      <main className="min-h-[calc(100vh-96px)] relative z-20 mx-auto w-11/12 md:w-3/4 lg:w-3/6 lg:min-h-screen">
        {children}
      </main>
      <Transition />
      <Footer />
    </>
  );
};

export default MainLayout;
