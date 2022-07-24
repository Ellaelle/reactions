import React from "react";
import { animated } from "react-spring";
import { eyesTransition, mouthTransition } from "../../common/transitions";
import { IExpressionProps } from "../../common/types";

const Embarrassed: React.FC<IExpressionProps> = ({
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
      <ellipse
        stroke="#ffb8d3"
        fill="#ffb8d3"
        strokeMiterlimit="10"
        cx="50.74"
        cy="131.47"
        rx="13.86"
        ry="6.15"
      />
      <ellipse
        stroke="#ffb8d3"
        fill="#ffb8d3"
        strokeMiterlimit="10"
        cx="154.05"
        cy="131.47"
        rx="13.86"
        ry="6.15"
      />
    </g>
  );

  const getMouth = () => (
    <path
      strokeWidth="4px"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="#fff"
      stroke={strokeColor}
      d="M53.22,16.25c0,.32-.06.64-.06,1,0,6.45,5.93,11.68,13.25,11.68s13.24-5.23,13.24-11.68c0-.33,0-.65-.05-1Z"
      transform="translate(38,105)"
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
