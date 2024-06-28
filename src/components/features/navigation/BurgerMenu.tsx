interface BurgerMenuProps {
  onClick: () => void;
}

/**
 * Composant Menu Burger
 * @param onClick - Action du menu burger
 * @returns {JSX.Element}
 */
const BurgerMenu = ({ onClick }: BurgerMenuProps): JSX.Element => {
  return (
    <button
      type="button"
      className="w-10 h-10 border border-divider rounded-md md:hidden flex justify-center items-center relative z-30"
      onClick={onClick}
    >
      <span className="burger-bar" />
    </button>
  );
};

export default BurgerMenu;
