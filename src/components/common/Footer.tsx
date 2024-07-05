import SocialNetwork from "../features/social-network/SocialNetwork";

/**
 * Composant Footer
 * @returns {JSX.Element}
 */
const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-center gap-4 w-full px-4 py-4 lg:py-0">
      <SocialNetwork />
    </footer>
  );
};

export default Footer;
