import Button from "../../common/Button";

const UserFooterCard = () => {
  return (
    <footer className="text-right">
      <Button
        type="button"
        onClick={() => console.log("pressed")}
        style="text-lg"
      >
        Télécharger CV
      </Button>
    </footer>
  );
};

export default UserFooterCard;
