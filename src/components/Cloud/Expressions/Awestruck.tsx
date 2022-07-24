import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../../common/transitions";
import { IExpressionProps } from "../../common/types";

const Awestruck: React.FC<IExpressionProps> = ({
  strokeColor,
  isAnimated,
  animationProps,
}) => {
  const getEyes = () => (
    <g>
      <circle
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        cx="50.74"
        cy="111.47"
        r="20"
      />
      <circle
        strokeWidth=".65px"
        stroke={strokeColor}
        strokeMiterlimit="10"
        fill={strokeColor}
        strokeLinecap="round"
        cx="50.74"
        cy="111.47"
        r="13.07"
      />
      <circle fill="#fff" cx="56.9" cy="102.97" r="6.91" />
      <circle fill="#fff" cx="48.12" cy="115.49" r="4.02" />
      <ellipse
        opacity=".34"
        fill="#fff"
        cx="339.21"
        cy="280.76"
        rx="7.94"
        ry="3.91"
        transform="rotate(-30 -141.268 740.467)"
      />
      <circle
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        cx="154.05"
        cy="111.47"
        r="20"
      />
      <circle
        strokeWidth=".65px"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeMiterlimit="10"
        fill={strokeColor}
        cx="154.05"
        cy="111.47"
        r="13.07"
      />
      <circle fill="#fff" cx="160.21" cy="102.97" r="6.91" />
      <circle fill="#fff" cx="151.42" cy="115.49" r="4.02" />

      <ellipse
        opacity=".34"
        fill="#fff"
        cx="442.36"
        cy="280.76"
        rx="7.94"
        ry="3.91"
        transform="rotate(-30 -38.108 740.469)"
      />
    </g>
  );

  const getMouth = () => (
    <path
      strokeLinecap="round"
      fill="none"
      strokeWidth="4"
      strokeMiterlimit="10"
      stroke={strokeColor}
      d="M92.27 126.81h21.49"
    />
  );

  return isAnimated ? (
    <g id="awestruck-face" data-testid="awestruck">
      <animated.g
        id="mouth"
        style={{ transform: animationProps.xy?.interpolate(eyesTransition) }}
      >
        {getMouth()}
      </animated.g>
      <animated.g
        id="eyes"
        style={{ transform: animationProps.xy?.interpolate(mouthTransition) }}
      >
        {getEyes()}
      </animated.g>
    </g>
  ) : (
    <g id="awestruck-face" data-testid="awestruck-face-no-animation">
      <g id="eyes">{getEyes()}</g>
      <g id="mouth">{getMouth()}</g>
    </g>
  );
};

export default Awestruck;
