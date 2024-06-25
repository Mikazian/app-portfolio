import Navbar from "../features/navigation/Navbar";
import Transition from "./Transition";
import Footer from "../common/Footer";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Navbar />
      <header className="relative z-20 mx-auto w-full pt-20 h-screen">
        {children}
      </header>
      <Transition />
      <Footer />
    </>
  );
};

export default HomeLayout;
