import "./card-plan.scss";
import TagPromotion from "../../../assets/tag-promotion.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  titulo: string;
  icon: string;
  beneficios: string[];
  precioPlan: number;
  recomendado?: boolean;
  selectedOption: number;
};
function CardPlan({
  id,
  titulo,
  icon,
  beneficios,
  precioPlan,
  recomendado = false,
  selectedOption,
}: Props) {
  const navigate = useNavigate();
  const dscto = 0.05;
  const newPrecio = precioPlan * (1 - dscto);

  function handleOnClick() {
    console.log(id);
    navigate("/resumen");
  }

  return (
    <article className={`card__plan ${recomendado ? "card__plan-promo" : ""}`}>
      <div className="card__plan__header">
        {recomendado && (
          <img
            className="card__plan__header__promocion"
            src={TagPromotion}
            alt="tag promocion"
          />
        )}
        <div className="card__plan__header__content">
          <div className="header__content">
            <div className="header">
              <span className="header__title">{titulo}</span>
              <div className="header__costo">
                <span className="header__costo__title">Costo del plan</span>
                {selectedOption === 2 ? (
                  <span className="header__costo__precio__dscto">
                    ${precioPlan} al mes
                  </span>
                ) : (
                  <></>
                )}
                <span className="header__costo__precio">
                  ${selectedOption === 2 ? newPrecio : precioPlan} al mes
                </span>
              </div>
            </div>
            <img className="header__img" src={icon} alt="plan icono" />
          </div>
          <hr className="card__plan__header__divider" />
        </div>
      </div>
      <div className="card__plan__info">
        <ul className="card__plan__info__beneficios">
          {beneficios.map((beneficio, index) => (
            <li key={index} className="beneficios__description">
              {beneficio}
            </li>
          ))}
        </ul>
        <button className="card__plan__info__button" onClick={handleOnClick}>
          <span className="card__plan__info__button__text">
            Seleccionar Plan
          </span>
        </button>
      </div>
    </article>
  );
}

export default CardPlan;
