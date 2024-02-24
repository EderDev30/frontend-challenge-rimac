import "./back-button.scss";
import IconButton from "../../assets/icon-button.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  route: string;
};

function BackButton({ route }: Props) {
  const navigate = useNavigate();
  return (
    <button className="back__button" onClick={() => navigate(route)}>
      <img src={IconButton} alt="" />
      <span className="back__button__text">Volver</span>
    </button>
  );
}

export default BackButton;
