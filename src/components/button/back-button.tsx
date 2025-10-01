import "./back-button.scss";
import { IconButton } from "@/assets";
import { useNavigate } from "react-router-dom";

type Props = {
  route: string;
  showText?: boolean;
};

function BackButton({ route, showText = true }: Props) {
  const navigate = useNavigate();
  return (
    <button className="back__button" onClick={() => navigate(route)}>
      <img src={IconButton} alt="back button" />
      {showText && <span className="back__button__text">Volver</span>}
    </button>
  );
}

export default BackButton;
