import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../transitions";
import { IExpressionProps } from "../types";

const Awestruck: React.FC<IExpressionProps> = ({
  strokeColor,
  isAnimated,
  animationProps,
  character,
}) => {
  const getEyes = () => (
    <g>
      <circle
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        cx="50.74"
        cy="111.47"
        r={character?.eyes.largeRadius}
        transform={character?.eyes.leftTransform}
      />
      <circle
        strokeWidth=".65px"
        stroke={strokeColor}
        strokeMiterlimit="10"
        fill={strokeColor}
        strokeLinecap="round"
        cx="50.74"
        cy="111.47"
        r={character?.eyes.radius}
        transform={character?.eyes.leftTransform}
      />
      <circle
        fill="#fff"
        cx="53"
        cy="105"
        r={character?.eyes.highlightTop}
        transform={character?.eyes.leftTransform}
      />
      <circle
        fill="#fff"
        cx="50"
        cy="115.49"
        r={character?.eyes.highlightBottom}
        transform={character?.eyes.leftTransform}
      />
      <ellipse
        opacity=".34"
        fill="#fff"
        cx="339.21"
        cy="280.76"
        rx="7.94"
        ry="4"
        transform={character?.eyes.largeLeftTransform}
      />
      <circle
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        cx="154.05"
        cy="111.47"
        r={character?.eyes.largeRadius}
        transform={character?.eyes.rightTransform}
      />
      <circle
        strokeWidth=".65px"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeMiterlimit="10"
        fill={strokeColor}
        cx="154.05"
        cy="111.47"
        r={character?.eyes.radius}
        transform={character?.eyes.rightTransform}
      />
      <circle
        fill="#fff"
        cx="158"
        cy="105"
        r={character?.eyes.highlightTop}
        transform={character?.eyes.rightTransform}
      />
      <circle
        fill="#fff"
        cx="155"
        cy="115.49"
        r={character?.eyes.highlightBottom}
        transform={character?.eyes.rightTransform}
      />

      <ellipse
        opacity=".34"
        fill="#fff"
        cx="442.36"
        cy="280.76"
        rx="7.94"
        ry="3.91"
        transform={character?.eyes.largeRightTransform}
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
