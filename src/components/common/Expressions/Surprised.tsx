import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../transitions";
import { IExpressionProps } from "../types";

const Surprised: React.FC<IExpressionProps> = ({
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
        fill="none"
        strokeWidth={character?.eyebrows.stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        stroke={strokeColor}
        d="M2,8.08A11.32,11.32,0,0,1,17.94,6.64"
        transform={character?.eyebrows.raisedLeftTransform}
      />
      <path
        fill="none"
        strokeWidth={character?.eyebrows.stroke}
        strokeLinecap="round"
        strokeMiterlimit="10"
        stroke={strokeColor}
        d="M105.81,5.27a11.31,11.31,0,0,1,16,.09"
        transform={character?.eyebrows.raisedRightTransform}
      />
    </g>
  );

  const getMouth = () => (
    <ellipse
      strokeWidth={character?.mouth.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#fff"
      stroke={strokeColor}
      cx="105"
      cy="130"
      rx="8.28"
      ry="10.2"
      transform={character?.mouth.flatTransform}
    />
  );

  return isAnimated ? (
    <g id="surprised-face" data-testid="surprised">
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
    <g id="surprised-face" data-testid="surprised-face-no-animation">
      <g id="eyes">{getEyes()}</g>
      <g id="mouth">{getMouth()}</g>
    </g>
  );
};

export default Surprised;
