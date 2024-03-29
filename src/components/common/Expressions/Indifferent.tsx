import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../transitions";
import { IExpressionProps } from "../types";

const Indifferent: React.FC<IExpressionProps> = ({
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
    <line
      stroke={strokeColor}
      strokeMiterlimit="10"
      fill="none"
      strokeLinecap="round"
      strokeWidth={character?.mouth.strokeWidth}
      transform={character?.mouth.flatTransform}
      x1="88"
      y1="129"
      x2="119"
      y2="129"
    />
  );

  return isAnimated ? (
    <g id="indifferent-face" data-testid="indifferent">
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
    <g id="indifferent-face" data-testid="indifferent-face-no-animation">
      <g id="eyes">{getEyes()}</g>
      <g id="mouth">{getMouth()}</g>
    </g>
  );
};

export default Indifferent;
