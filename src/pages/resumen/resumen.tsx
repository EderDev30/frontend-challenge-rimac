import BackButton from "../../components/button/back-button";
import Stepper from "../../components/stepper/stepper";
import StepperProgress from "../../components/stepper/stepper-progress";
import FamilyIcon from "../../assets/family-icon.svg";
import "./resumen.scss";

import React from "react";

function Resumen() {
  const route = "/planes";

  // TODO: obtener del useContext
  const userInfo = {
    name: "Rocío",
    lastName: "Miranda Díaz",
    birthDay: "02-04-1990",
    celular: "5130216147",
    dni: "30216147",
  };

  const planInfo = {
    plan: "Plan en Casa y Clínica",
    costo: 99,
  };

  return (
    <section className="resumen">
      <Stepper step={2} />
      <StepperProgress route={route} step={2} progress={100} />
      <div className="container">
        <div className="resumen__content">
          <BackButton route={route} />
          <div className="resumen__content__info">
            <h1 className="resumen__content__info__title">
              Resumen del seguro
            </h1>
            <div className="resumen__content__info__card">
              <div className="card__header">
                <span className="card__header__subtitle">
                  Precios calculados para:
                </span>
                <span className="card__header__title">
                  <img src={FamilyIcon} alt="family icon" />
                  <span className="card__header__title__text">
                    {`${userInfo.name} ${userInfo.lastName}`}
                  </span>
                </span>
              </div>
              <hr className="card__divider" />
              <div className="card__content">
                <span className="card__content__title">
                  Responsable de pago
                </span>
                <span className="card__content__text">DNI: {userInfo.dni}</span>
                <span className="card__content__text">
                  Celular: {userInfo.celular}
                </span>
              </div>
              <div className="card__content">
                {" "}
                <span className="card__content__title">Plan elegido</span>
                <span className="card__content__text">{planInfo.plan}</span>
                <span className="card__content__text">
                  {` Costo del Plan: $${planInfo.costo} al mes`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resumen;
