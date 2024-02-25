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

function Planes() {
  const [selectedOption, setSelectedOption] = useState(0);
  const [counter, setCounter] = useState(1);
  const [enableRight, setEnableRight] = useState(true);
  const [enableLeft, setEnableLeft] = useState(false);
  const totalPagination = 3;

  useEffect(() => {
    setEnableRight(counter < 3);
    setEnableLeft(counter > 1);

    const contentPlanes = document.querySelector(".planes__content__planes");

    contentPlanes?.scrollTo({
      left: 320 * (counter - 1),
      behavior: "smooth",
    });
  }, [counter]);

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
      <StepperProgress step={1} progress={50} />
      <div className="container">
        <div className="planes__content">
          <BackButton route="/" />
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
                <CardPlan
                  selectedOption={selectedOption}
                  id={1}
                  titulo="Plan en Casa"
                  icon={HomeLight}
                  precioPlan={39}
                  beneficios={[
                    <span>
                      <strong>Médico general a domicilio</strong> por S/20 y
                      medicinas cubiertas al 100%.
                    </span>,
                    <span>
                      <strong>Videoconsulta</strong> y orientación telefónica al
                      100% en medicina general + pediatría.
                    </span>,
                    <span>
                      <strong>Indemnización</strong> de S/300 en caso de
                      hospitalización por más de un día."
                    </span>,
                  ]}
                />
                <CardPlan
                  selectedOption={selectedOption}
                  id={2}
                  titulo="Plan en Casa y Clínica"
                  recomendado={true}
                  icon={HospitalLight}
                  precioPlan={99}
                  beneficios={[
                    <span>
                      <strong>Consultas en clínica</strong> para cualquier
                      especialidad.
                    </span>,
                    <span>
                      <strong>Medicinas y exámenes</strong> derivados cubiertos
                      al 80%
                    </span>,
                    <span>
                      Atención médica en{" "}
                      <strong>más de 200 clínicas del país.</strong>
                    </span>,
                  ]}
                />
                <CardPlan
                  selectedOption={selectedOption}
                  id={3}
                  titulo="Plan en Casa + Chequeo"
                  icon={HomeLight}
                  precioPlan={49}
                  beneficios={[
                    <span>
                      <strong>Un Chequeo preventivo general</strong> de manera
                      presencial o virtual.
                    </span>,
                    <span>
                      Acceso a <strong>Vacunas</strong> en el Programa del MINSA
                      en centros privados.
                    </span>,
                    <span>
                      <strong>
                        Incluye todos los beneficios del Plan en Casa.
                      </strong>
                    </span>,
                  ]}
                />
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
