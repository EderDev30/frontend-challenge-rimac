import "./control-arrow.scss";

type Props = {
  color?: string;
  right?: boolean;
  active?: boolean;
};

const ControlArrow = ({ right = false, active = false }: Props) => {
  const defaultColor = "#A9AFD9";
  const activeColor = "#4F4FFF";
  return (
    <svg
      className={`control__arrow ${right ? "control__arrow-right" : ""}`}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6086_391)">
        <circle
          cx="16"
          cy="16"
          r="15"
          stroke={active ? activeColor : defaultColor}
          strokeWidth="2"
        />
        <path
          d="M17.295 21.2049L12.085 15.9999L17.295 10.7949L18.705 12.2049L14.915 15.9999L18.705 19.7949L17.295 21.2049Z"
          fill={active ? activeColor : defaultColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_6086_391">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ControlArrow;
