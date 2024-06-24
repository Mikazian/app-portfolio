import Contact from "../features/contact/Contact";
import SocialNetwork from "../features/social-network/SocialNetwork";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse items-center gap-4 w-full px-4 py-4 sm:items-center sm:justify-between sm:flex-row lg:py-0">
      <Contact />
      <SocialNetwork />
    </footer>
  );
};

export default Footer;
