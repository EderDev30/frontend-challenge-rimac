import { BackButton, Stepper, StepperProgress } from "@/components";
import { FamilyIcon } from "@/assets";
import "./resumen.scss";
import { useUser } from "@/hook";

function Resumen() {
  const route = "/planes";

  const { user } = useUser();

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
                    {`${user?.name} ${user?.lastName}`}
                  </span>
                </span>
              </div>
              <hr className="card__divider" />
              <div className="card__content">
                <span className="card__content__title">
                  Responsable de pago
                </span>
                <span className="card__content__text">{`${user?.typeDoc}: ${user?.nroDoc}`}</span>
                <span className="card__content__text">
                  Celular: {user?.phone}
                </span>
              </div>
              <div className="card__content">
                {" "}
                <span className="card__content__title">Plan elegido</span>
                <span className="card__content__text">{user?.plan.name}</span>
                <span className="card__content__text">
                  {` Costo del Plan: $${user?.plan.price} al mes`}
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
