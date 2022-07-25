import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import {
  Angry,
  Awestruck,
  Embarrassed,
  Happy,
  Indifferent,
  Sad,
  Surprised,
  Worried,
} from "../common/Expressions";
import { bodyTransition } from "../common/transitions";
import { IBodyProps } from "../common/types";
import { character, fill, stroke } from "../styles";
import paths from "./paths";

const Wrapper = styled.div`
  margin: 30px;
  min-width: 200px;
  min-height: 200px;
`;

const Cloud: React.FC<IBodyProps> = ({
  expression,
  color = "blue",
  isAnimated,
  customStyle,
}) => {
  const [animationProps, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const strokeColor = customStyle ? customStyle.stroke : stroke[color];
  const fillColor = customStyle ? customStyle.fill : fill[color];

  const blobFace = {
    happy: (
      <Happy
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.cloud}
      />
    ),
    awestruck: (
      <Awestruck
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.cloud}
      />
    ),
    sad: (
      <Sad
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.cloud}
      />
    ),
    angry: (
      <Angry
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.cloud}
      />
    ),
    indifferent: (
      <Indifferent
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.cloud}
      />
    ),
    surprised: (
      <Surprised
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.cloud}
      />
    ),
    embarrassed: (
      <Embarrassed
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.cloud}
      />
    ),
    worried: (
      <Worried
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.cloud}
      />
    ),
  };

  const getBody = () => (
    <g>
      <path className="cloud-body" fill={fillColor} d={paths.body} />
      <path
        className="cloud-body-outline"
        stroke-width="5px"
        stroke={strokeColor}
        d={paths.bodyOutline}
      />
      <path
        className="light-shadow"
        fill="#fff"
        opacity=".3"
        fill-rule="evenodd"
        d={paths.lightShadow}
      />
      {blobFace[expression]}
    </g>
  );

  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const viewBox = "-2 -4 550 500";

  return isAnimated ? (
    <Wrapper
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        /* @ts-expect-error */
        style={{ transform: animationProps.xy.interpolate(bodyTransition) }}
        width="250px"
      >
        {getBody()}
      </animated.svg>
    </Wrapper>
  ) : (
    <Wrapper data-testid="not-animated">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} width="250px">
        {getBody()}
      </svg>
    </Wrapper>
  );
};

export default Cloud;
