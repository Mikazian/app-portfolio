import Navbar from "../features/navigation/Navbar";
import BackgroundLayout from "./Transition";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="relative z-20 mx-auto w-11/12 md:w-3/4">{children}</div>
      <BackgroundLayout />
    </>
  );
};

export default MainLayout;
