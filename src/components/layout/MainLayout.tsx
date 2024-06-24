import Navbar from "../features/navigation/Navbar";
import BackgroundLayout from "./Transition";
import Footer from "../common/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="relative z-20 mx-auto w-11/12 md:w-3/4 lg:w-3/6 py-20">
        {children}
      </div>
      <BackgroundLayout />
      <Footer />
    </>
  );
};

export default MainLayout;
