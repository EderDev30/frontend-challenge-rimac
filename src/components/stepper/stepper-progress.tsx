import BackButton from "../button/back-button";
import "./stepper-progress.scss";

type Props = {
  step: number;
  progress: number;
  route: string;
};

function StepperProgress({ step, progress, route }: Props) {
  return (
    <div className="stepper__progress">
      <div className="stepper__progress__content">
        <BackButton route={route} showText={false} />
        <span className="stepper__progress__content__text">{`PASO ${step} DE 2`}</span>
        <progress
          className="stepper__progress__content__bar"
          max="100"
          value={progress}
        />
      </div>
    </div>
  );
}

export default StepperProgress;
