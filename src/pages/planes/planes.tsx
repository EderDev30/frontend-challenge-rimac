import {
  AddUserLight,
  HomeLight,
  HospitalLight,
  ProtectionLight,
} from "@/assets";
import {
  BackButton,
  CardPlan,
  CardSelect,
  ControlArrow,
  Stepper,
  StepperProgress,
} from "@/components";
import "./planes.scss";
import { usePlanes } from "./usePlanes";
import { paths } from "@/config";

function Planes() {
  const {
    properties: {
      selectedOption,
      counter,
      planesList,
      user,
      contentRef,
      totalPagination,
      enableLeft,
      enableRight,
    },
    methods: { handleOnClickSelection, handleOnClickControl },
  } = usePlanes();

  return (
    <section className="planes">
      <Stepper step={1} />
      <StepperProgress route={paths.home} step={1} progress={50} />
      <div className="container">
        <div className="planes__content">
          <BackButton route={paths.home} />
          <div className="planes__content__info">
            <div className="planes__content__info__title">
              <h1>{`${user?.name} ¿Para quién deseas cotizar?`}</h1>
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
              <div className="planes__content__planes" ref={contentRef}>
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
                  <ControlArrow active={enableLeft} />
                </span>
                <span className="control__text">{`${counter} / ${totalPagination}`}</span>
                <span
                  onClick={() => {
                    if (enableRight) {
                      handleOnClickControl(1);
                    }
                  }}
                >
                  <ControlArrow right={true} active={enableRight} />
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
