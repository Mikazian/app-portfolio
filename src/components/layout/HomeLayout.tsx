import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../features/navigation/Navbar";
import Transition from "./Transition";
import Footer from "../common/Footer";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
