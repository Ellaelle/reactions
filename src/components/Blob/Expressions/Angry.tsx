import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../../common/transitions";
import { IExpressionProps } from "./types";

const Angry: React.FC<IExpressionProps> = ({
  strokeColor,
  isAnimated,
  animationProps,
}) => {
  const getEyes = () => (
    <g>
      <circle
        fill={strokeColor}
        stroke={strokeColor}
        strokeMiterlimit="10"
        cx="50.74"
        cy="111.47"
        r="5.9"
      />
      <circle
        fill={strokeColor}
        stroke={strokeColor}
        strokeMiterlimit="10"
        cx="154.05"
        cy="111.47"
        r="5.9"
      />
      <line
        fill="none"
        strokeLinecap="round"
        strokeWidth="4px"
        stroke={strokeColor}
        strokeMiterlimit="10"
        x1="145"
        y1="100"
        x2="165"
        y2="92"
      />
      <line
        fill="none"
        strokeLinecap="round"
        strokeWidth="4px"
        stroke={strokeColor}
        strokeMiterlimit="10"
        x1="40"
        y1="92"
        x2="60"
        y2="100"
      />
    </g>
  );

  const getMouth = () => (
    <line
      fill="none"
      strokeLinecap="round"
      strokeWidth="4px"
      stroke={strokeColor}
      strokeMiterlimit="10"
      x1="88"
      y1="129"
      x2="119"
      y2="129"
    />
  );

  return isAnimated ? (
    <g id="angry-face" data-testid="angry">
      <animated.g
        id="eyes"
        style={{ transform: animationProps.xy?.interpolate(eyesTransition) }}
      >
        {getEyes()}
      </animated.g>
      <animated.g
        id="mouth"
        style={{ transform: animationProps.xy?.interpolate(mouthTransition) }}
      >
        {getMouth()}
      </animated.g>
    </g>
  ) : (
    <g id="angry-face" data-testid="angry-face-no-animation">
      <g id="eyes">{getEyes()}</g>
      <g id="mouth">{getMouth()}</g>
    </g>
  );
};

export default Angry;
