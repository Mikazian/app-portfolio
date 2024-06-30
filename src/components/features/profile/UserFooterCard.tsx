import Button from "../../common/Button";

/**
 * Composant Footer de la carte profil utilisateur
 * @returns JSX.Element
 */
const UserFooterCard = (): JSX.Element => {
  return (
    <footer className="text-right">
      <Button
        type="button"
        // TODO: Ajouter le téléchargement du PDF
        onClick={() => console.log("pressed")}
        style="text-lg"
      >
        Télécharger CV
      </Button>
    </footer>
  );
};

export default UserFooterCard;
