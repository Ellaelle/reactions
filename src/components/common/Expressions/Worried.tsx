import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../transitions";
import { IExpressionProps } from "../types";

const Worried: React.FC<IExpressionProps> = ({
  strokeColor,
  isAnimated,
  animationProps,
  character,
}) => {
  const getEyes = () => (
    <g>
      <circle
        strokeMiterlimit="10"
        stroke={strokeColor}
        fill={strokeColor}
        cx="50.74"
        cy="111.47"
        r={character?.eyes.radius}
        transform={character?.eyes.leftTransform}
      />
      <circle
        strokeMiterlimit="10"
        stroke={strokeColor}
        fill={strokeColor}
        cx="154.05"
        cy="111.47"
        r={character?.eyes.radius}
        transform={character?.eyes.rightTransform}
      />
      <path
        strokeWidth={character?.eyebrows.stroke}
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
        stroke={strokeColor}
        d="M16.1,2A11.31,11.31,0,0,1,2,9.56"
        transform={character?.eyebrows.raisedLeftTransform}
      />
      <path
        strokeWidth={character?.eyebrows.stroke}
        strokeLinecap="round"
        fill="none"
        strokeMiterlimit="10"
        stroke={strokeColor}
        d="M121.8,8.46a11.32,11.32,0,0,1-15.09-5.34"
        transform={character?.eyebrows.raisedRightTransform}
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
