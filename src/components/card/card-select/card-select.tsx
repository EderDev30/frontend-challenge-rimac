import "./card-select.scss";
import DefaultCheckButton from "../../../assets/default-check-button.svg";
import CheckedCheckButton from "../../../assets/checked-check-button.svg";

type Props = {
  icon: string;
  option: number;
  selectedOption: number;
  handleOnClick: (option: number) => void;
  title: string;
  description: string;
};

function CardSelect({
  icon,
  option,
  selectedOption,
  handleOnClick,
  title,
  description,
}: Props) {
  return (
    <div className="card__select">
      <div
        className={`card__select__option ${
          selectedOption === option ? "card__select__option-selected" : ""
        }`}
        onClick={() => handleOnClick(option)}
      >
        <img
          className="card__select__option__img"
          src={
            selectedOption === option ? CheckedCheckButton : DefaultCheckButton
          }
          alt="check button"
        />
        <div className="card__select__info">
          <div className="card__select__info__header">
            <img
              className="card__select__info__img"
              src={icon}
              alt="card icon"
            />
            <span className="card__select__info__title">{title}</span>
          </div>
          <p className="card__select__info__description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CardSelect;
