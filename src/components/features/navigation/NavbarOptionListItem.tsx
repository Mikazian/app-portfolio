import Divider from '../../common/Divider';

export type NavbarOptionListItemProps = {
  separator?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

/**
 * Élément de la liste des options du menu mobile (burger)
 * @param separator - Rendre un simple séparateur
 * @param onClick - Action au clic de la ligne (rend un bouton pleine largeur)
 * @param children - Contenu de la ligne
 * @returns {JSX.Element}
 */
const NavbarOptionListItem = ({
  separator = false,
  onClick,
  children,
}: NavbarOptionListItemProps): React.JSX.Element => {
  if (separator) {
    return (
      <li role="separator">
        <Divider />
      </li>
    );
  }

  const rowClass = 'w-full flex items-center justify-between gap-4 px-4 py-3';

  if (onClick) {
    return (
      <li className="w-full group">
        <button
          type="button"
          onClick={onClick}
          className={`${rowClass} cursor-pointer transition-colors duration-200`}
        >
          {children}
        </button>
      </li>
    );
  }

  return <li className={`${rowClass} group transition-colors duration-200`}>{children}</li>;
};

export default NavbarOptionListItem;