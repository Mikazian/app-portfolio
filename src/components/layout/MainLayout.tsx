import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../features/navigation/Navbar";
import Transition from "./Transition";
import Footer from "../common/Footer";
import Text from "../common/Text";
import CopyAlert from "../features/copy-clipboard/CopyAlert";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <header className="flex items-center justify-center relative z-20 h-screen px-4">
        <Text
          as="h1"
          style="font-title-black text-6xl uppercase tracking-wider text-center"
        >
          {title}
        </Text>
      </header>
      <main className="min-h-[calc(100vh-96px)] relative z-20 px-4 mx-auto w-full max-w-[856px] lg:min-h-screen lg:px-0">
        {children}
      </main>
      <CopyAlert />
      <Transition />
      <Footer />
    </>
  );
};

export default MainLayout;
