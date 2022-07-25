import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../transitions";
import { IExpressionProps } from "../types";

const Embarrassed: React.FC<IExpressionProps> = ({
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
      <ellipse
        stroke="#ffb8d3"
        fill="#ffb8d3"
        strokeMiterlimit="10"
        cx="50.74"
        cy="131.47"
        rx="13.86"
        ry="6.15"
        transform={character?.cheeks.leftTransform}
      />
      <ellipse
        stroke="#ffb8d3"
        fill="#ffb8d3"
        strokeMiterlimit="10"
        cx="154.05"
        cy="131.47"
        rx="13.86"
        ry="6.15"
        transform={character?.cheeks.rightTransform}
      />
    </g>
  );

  const getMouth = () => (
    <line
      fill="none"
      strokeLinecap="round"
      strokeWidth={character?.mouth.strokeWidth}
      stroke={strokeColor}
      strokeMiterlimit="10"
      transform={character?.mouth.flatTransform}
      x1="88"
      y1="129"
      x2="119"
      y2="129"
    />
  );

  return isAnimated ? (
    <g id="embarrassed-face" data-testid="embarrassed">
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
    <g id="embarrassed-face" data-testid="embarrassed-face-no-animation">
      <g id="eyes">{getEyes()}</g>
      <g id="mouth">{getMouth()}</g>
    </g>
  );
};

export default Embarrassed;
