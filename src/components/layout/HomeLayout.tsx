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
      <header className="relative z-20 w-full h-screen px-4">{children}</header>
      <Transition />
      <Footer />
    </>
  );
};

export default HomeLayout;
