import "./card-plan.scss";
import { TagPromotion } from "@/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/hook";
import React from "react";
import { paths } from "@/config";

type Props = {
  titulo: string;
  icon: string;
  beneficios: string[];
  precioPlan: number;
  recomendado?: boolean;
  selectedOption: number;
};

const CardPlan = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      titulo,
      icon,
      beneficios,
      precioPlan,
      recomendado = false,
      selectedOption,
    },
    ref
  ) => {
    const { updateUser } = useUser();
    const navigate = useNavigate();
    const dscto = 0.05;
    const priceDscto = precioPlan * (1 - dscto);
    const newPrice = selectedOption === 2 ? priceDscto : precioPlan;

    function handleOnClick() {
      updateUser({
        plan: {
          name: titulo,
          price: newPrice,
        },
      });
      navigate(paths.resumen);
    }

    return (
      <div
        ref={ref}
        className={`card__plan ${recomendado ? "card__plan-promo" : ""}`}
      >
        <div className="card__plan__header">
          {recomendado && (
            <img
              className="card__plan__header__promocion"
              src={TagPromotion}
              alt="tag promocion"
              width={122}
              height={20}
            />
          )}
          <div className="card__plan__header__content">
            <div className="header__content">
              <div className="header">
                <span className="header__title">{titulo}</span>
                <div className="header__costo">
                  <span className="header__costo__title">Costo del plan</span>
                  {selectedOption === 2 ? (
                    <span className="header__costo__precio__sin__dscto">
                      ${precioPlan} al mes
                    </span>
                  ) : null}
                  <span className="header__costo__precio">
                    ${newPrice} al mes
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
      </div>
    );
  }
);

CardPlan.displayName = "CardPlan"; // Needed for React DevTools and TS

export default CardPlan;
