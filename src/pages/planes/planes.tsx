import BackButton from "../../components/button/back-button";
import CardPlan from "../../components/card/card-plan/card-plan";
import CardSelect from "../../components/card/card-select/card-select";
import Stepper from "../../components/stepper/stepper";
import HomeLight from "../../assets/home-light.svg";
import HospitalLight from "../../assets/hospital-light.svg";
import AddUserLight from "../../assets/add-user-light.svg";
import ProtectionLight from "../../assets/protection-light.svg";
import "./planes.scss";
import { useEffect, useState } from "react";
import ControlArrow from "../../components/control-arrow/control-arrow";
import StepperProgress from "../../components/stepper/stepper-progress";
import { getPlanes } from "../../services/api";
import { IPlan } from "../../types";

function Planes() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [counter, setCounter] = useState(1);
  const [enableRight, setEnableRight] = useState(true);
  const [enableLeft, setEnableLeft] = useState(false);
  const [planesList, setPlanesList] = useState<IPlan[]>([]);
  const totalPagination = 3;
  const route = "/";

  // Get Planes
  useEffect(() => {
    getPlanes().then((data) => setPlanesList(data));
  }, []);

  // Planes Slider
  useEffect(() => {
    setEnableRight(counter < 3);
    setEnableLeft(counter > 1);

    const contentPlanes = document.querySelector(".planes__content__planes");

    contentPlanes?.scrollTo({
      left: 320 * (counter - 1),
      behavior: "smooth",
    });
  }, [counter]);

  // Reset planes slider position
  useEffect(() => {
    if (counter === 1) {
      const contentPlanes = document.querySelector(".planes__content__planes");
      contentPlanes?.scroll(0, 0);
    }
  }, [selectedOption]);

  function handleOnClickSelection(option: number) {
    setSelectedOption(option);
  }

  function handleOnClickControl(value: number) {
    setCounter((prevState) => prevState + value);
  }

  return (
    <section className="planes">
      <Stepper step={1} />
      <StepperProgress route={route} step={1} progress={50} />
      <div className="container">
        <div className="planes__content">
          <BackButton route={route} />
          <div className="planes__content__info">
            <div className="planes__content__info__title">
              <h1>Rocío ¿Para quién deseas cotizar?</h1>
              <p>Selecciona la opción que se ajuste más a tus necesidades.</p>
            </div>
            <div className="planes__content__info__select">
              <CardSelect
                option={1}
                selectedOption={selectedOption}
                handleOnClick={handleOnClickSelection}
                icon={AddUserLight}
                title="Para mí"
                description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
              />
              <CardSelect
                option={2}
                selectedOption={selectedOption}
                handleOnClick={handleOnClickSelection}
                icon={ProtectionLight}
                title="Para alguien más"
                description="Realiza una cotización para uno de tus familiares o cualquier persona."
              />
            </div>
          </div>
          {selectedOption !== 0 ? (
            <>
              <div className="planes__content__planes">
                {planesList.map((plan, index) => {
                  return (
                    <CardPlan
                      key={index}
                      selectedOption={selectedOption}
                      titulo={plan.name}
                      icon={index === 1 ? HospitalLight : HomeLight}
                      precioPlan={plan.price}
                      beneficios={plan.description}
                      recomendado={index === 1}
                    />
                  );
                })}
              </div>
              <div className="planes__content__planes__control">
                <span
                  onClick={() => {
                    if (enableLeft) {
                      handleOnClickControl(-1);
                    }
                  }}
                >
                  <ControlArrow active={counter !== 1} />
                </span>
                <span className="control__text">{`${counter} / ${totalPagination}`}</span>
                <span
                  onClick={() => {
                    if (enableRight) {
                      handleOnClickControl(1);
                    }
                  }}
                >
                  <ControlArrow right={true} active={counter !== 3} />
                </span>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}

export default Planes;
