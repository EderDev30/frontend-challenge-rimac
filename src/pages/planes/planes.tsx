import BackButton from "../../components/button/back-button";
import CardPlan from "../../components/card/card-plan/card-plan";
import CardSelect from "../../components/card/card-select/card-select";
import Stepper from "../../components/stepper/stepper";
import HomeLight from "../../assets/home-light.svg";
import HospitalLight from "../../assets/hospital-light.svg";
import "./planes.scss";
import { useState } from "react";

function Planes() {
  const [selectedOption, setSelectedOption] = useState(0);

  function handleOnClickSelection(option: number) {
    setSelectedOption(option);
  }

  return (
    <section className="planes">
      <Stepper step={1}></Stepper>
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
                selectedOption={selectedOption}
                handleOnClick={handleOnClickSelection}
              />
            </div>
          </div>
          {selectedOption !== 0 ? (
            <div className="planes__content__planes">
              <CardPlan
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
                    <strong>Medicinas y exámenes</strong> derivados cubiertos al
                    80%
                  </span>,
                  <span>
                    Atención médica en{" "}
                    <strong>más de 200 clínicas del país.</strong>
                  </span>,
                ]}
              />
              <CardPlan
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
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
}

export default Planes;
