import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../../common/transitions";
import { IExpressionProps } from "./types";

const Worried: React.FC<IExpressionProps> = ({
  strokeColor,
  isAnimated,
  animationProps,
}) => {
  const getEyes = () => (
    <g>
      <circle
        strokeMiterlimit="10"
        stroke={strokeColor}
        fill={strokeColor}
        cx="50.74"
        cy="111.47"
        r="5.9"
      />
      <circle
        strokeMiterlimit="10"
        stroke={strokeColor}
        fill={strokeColor}
        cx="154.05"
        cy="111.47"
        r="5.9"
      />
      <path
        strokeWidth="4px"
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
        stroke={strokeColor}
        d="M16.1,2A11.31,11.31,0,0,1,2,9.56"
        transform="translate(40,80)"
      />
      <path
        strokeWidth="4px"
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
        stroke={strokeColor}
        d="M121.8,8.46a11.32,11.32,0,0,1-15.09-5.34"
        transform="translate(40,80)"
      />
    </g>
  );

  const getMouth = () => (
    <path
      strokeLinejoin="round"
      fill="#fff"
      strokeWidth="4px"
      strokeLinecap="round"
      stroke={strokeColor}
      d="M76.82,48.43c0-.32.05-.64.05-1,0-6.46-5.93-11.69-13.24-11.69S50.38,41,50.38,47.47c0,.32,0,.64.06,1Z"
      transform="translate(40,80)"
    />
  );

  return isAnimated ? (
    <g id="worried-face" data-testid="worried">
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
    <g id="worried-face" data-testid="worried-face-no-animation">
      <g id="eyes">{getEyes()}</g>
      <g id="mouth">{getMouth()}</g>
    </g>
  );
};

export default Worried;
