import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../transitions";
import { IExpressionProps } from "../types";

const Sad: React.FC<IExpressionProps> = ({
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
    <path
      stroke={strokeColor}
      strokeMiterlimit="10"
      fill="none"
      strokeLinecap="round"
      strokeWidth={character?.mouth.strokeWidth}
      transform={character?.mouth.transform}
      d="M35.19,26.48C45.24,6.4,71.8,6.39,79.84,27"
    />
  );

  return isAnimated ? (
    <g id="sad-face" data-testid="sad">
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
    <g id="sad-face" data-testid="sad-face-no-animation">
      <g id="eyes">{getEyes()}</g>
      <g id="mouth">{getMouth()}</g>
    </g>
  );
};

export default Sad;
