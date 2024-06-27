import SocialNetwork from "../features/social-network/SocialNetwork";

/**
 * Composant Footer
 * @returns {JSX.Element}
 */
const Footer = (): JSX.Element => {
  return (
    <footer className="flex flex-col-reverse items-center gap-4 w-full px-4 py-4 sm:items-center sm:justify-between sm:flex-row lg:py-0">
      <SocialNetwork />
    </footer>
  );
};

export default Footer;
