import "./card-select.scss";
import AddUserLight from "../../../assets/add-user-light.svg";
import ProtectionLight from "../../../assets/protection-light.svg";
import DefaultCheckButton from "../../../assets/default-check-button.svg";
import CheckedCheckButton from "../../../assets/checked-check-button.svg";

type Props = {
  selectedOption: number;
  handleOnClick: (option: number) => void;
};

function CardSelect({ selectedOption, handleOnClick }: Props) {
  return (
    <div className="card__select">
      <div
        className={`card__select__option ${
          selectedOption === 1 ? "card__select__option-selected" : ""
        }`}
        onClick={() => handleOnClick(1)}
      >
        <img
          className="card__select__option__img"
          src={selectedOption === 1 ? CheckedCheckButton : DefaultCheckButton}
          alt="check button"
        />
        <div className="card__select__info">
          <img src={ProtectionLight} alt="protection light" />
          <span className="card__select__info__title">Para mi</span>
          <p className="card__select__info__description">
            Cotiza tu seguro de salud y agrega familiares si así lo deseas.
          </p>
        </div>
      </div>
      <div
        className={`card__select__option ${
          selectedOption === 2 ? "card__select__option-selected" : ""
        }`}
        onClick={() => handleOnClick(2)}
      >
        <img
          className="card__select__option__img"
          src={selectedOption === 2 ? CheckedCheckButton : DefaultCheckButton}
          alt="check button"
        />
        <div className="card__select__info">
          <img src={AddUserLight} alt="add user light" />
          <span className="card__select__info__title">Para alguien más</span>
          <p className="card__select__info__description">
            Realiza una cotización para uno de tus familiares o cualquier
            persona.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardSelect;
