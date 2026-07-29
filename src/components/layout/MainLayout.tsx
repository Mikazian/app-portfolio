import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Navbar from '../features/navigation/Navbar';
import Transition from './Transition';
import Footer from '../common/Footer';
import ContactAlert from '../features/contact/ContactAlert';
import CopyAlert from '../features/copy-clipboard/CopyAlert';
import Header from '../common/Header';

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

      <Header title={title} />

      <main className="min-h-[calc(100vh-96px)] relative z-20 px-4 mx-auto w-full max-w-[855px] lg:min-h-screen lg:px-0 translate-x-[0.2px] mb-20">
        {children}
      </main>

      <CopyAlert />
      <ContactAlert />

      <Transition />

      <Footer />
    </>
  );
};

export default MainLayout;
