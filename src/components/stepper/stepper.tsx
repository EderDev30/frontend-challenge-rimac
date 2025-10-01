import "./stepper.scss";
import { LineStep1, LineStep2 } from "@/assets";

type Props = {
  step: number;
};

function Stepper({ step }: Props) {
  return (
    <div className="stepper">
      <div className="stepper__content">
        <span
          className={`stepper__circle ${
            step === 1 ? "stepper__circle-active" : ""
          }`}
        >
          <span className="stepper__number">1</span>
        </span>
        <span
          className={`stepper__description  ${
            step === 1 ? "stepper__description-active" : ""
          }`}
        >
          Planes y coberturas
        </span>
      </div>
      <img src={step === 1 ? LineStep1 : LineStep2} alt="line progress" />
      <div className="stepper__content">
        <span
          className={`stepper__circle ${
            step === 2 ? "stepper__circle-active" : ""
          }`}
        >
          <span className="stepper__number">2</span>
        </span>
        <span
          className={`stepper__description  ${
            step === 2 ? "stepper__description-active" : ""
          }`}
        >
          Resumen
        </span>
      </div>
    </div>
  );
}

export default Stepper;
