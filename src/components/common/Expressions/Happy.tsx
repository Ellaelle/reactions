import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../transitions";
import { IExpressionProps } from "../types";

const Happy: React.FC<IExpressionProps> = ({
  strokeColor,
  isAnimated,
  animationProps,
  character,
}) => {
  const getEyes = () => (
    <g>
      <circle
        fill={strokeColor}
        stroke={strokeColor}
        strokeMiterlimit="10"
        cx="50.74"
        cy="111.47"
        r={character?.eyes.radius}
        transform={character?.eyes.leftTransform}
      />
      <circle
        fill={strokeColor}
        stroke={strokeColor}
        strokeMiterlimit="10"
        cx="154.05"
        cy="111.47"
        r={character?.eyes.radius}
        transform={character?.eyes.rightTransform}
      />
    </g>
  );

  const getMouth = () => (
    <g>
      <path
        fill={strokeColor}
        stroke={strokeColor}
        strokeWidth={character?.mouth.strokeWidth}
        strokeMiterlimit="10"
        transform={character?.mouth.transform}
        d="M58.4,38.65c7.85,0,14.5-6.7,16.76-15.95a5.59,5.59,0,0,0-5.41-6.93H47.05a5.59,5.59,0,0,0-5.41,6.93C43.9,32,50.55,38.65,58.4,38.65Z"
      />
      <path
        stroke={strokeColor}
        fill="#ffb8d3"
        strokeWidth="1px"
        strokeMiterlimit="10"
        transform={character?.mouth.transform}
        d="M58.4,23.42c-6.29,0-11.64,2.74-13.75,6.6,3.22,5.26,8.18,8.63,13.75,8.63S68.93,35.28,72.15,30C70,26.16,64.68,23.42,58.4,23.42Z"
      />
    </g>
  );

  return isAnimated ? (
    <g id="happy-face" data-testid="happy">
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
    <g id="happy-face" data-testid="happy-face-no-animation">
      <g id="eyes">{getEyes()}</g>
      <g id="mouth">{getMouth()}</g>
    </g>
  );
};

export default Happy;
