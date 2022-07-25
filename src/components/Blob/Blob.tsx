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
  min-width: 220px;
  min-height: 200px;
`;

const Blob: React.FC<IBodyProps> = ({
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
        character={character.blob}
      />
    ),
    awestruck: (
      <Awestruck
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.blob}
      />
    ),
    sad: (
      <Sad
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.blob}
      />
    ),
    angry: (
      <Angry
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.blob}
      />
    ),
    indifferent: (
      <Indifferent
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.blob}
      />
    ),
    surprised: (
      <Surprised
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.blob}
      />
    ),
    embarrassed: (
      <Embarrassed
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.blob}
      />
    ),
    worried: (
      <Worried
        strokeColor={strokeColor}
        isAnimated={isAnimated}
        animationProps={animationProps}
        character={character.blob}
      />
    ),
  };

  const getBody = () => (
    <g>
      <path
        className="blob-body"
        d={paths.body}
        strokeMiterlimit="10"
        stroke={strokeColor}
        fill={fillColor}
        strokeWidth="3.79"
      />
      <path
        className="blob-light-shadow"
        d={paths.lightShadow}
        fill={strokeColor}
        opacity=".1"
        transform="translate(-294.23 -178.65)"
      />
      <path
        className="blob-dark-shadow"
        d={paths.darkShadow}
        fill={strokeColor}
        opacity=".1"
        transform="translate(-294.23 -178.65)"
      />
      <path
        className="blob-light-highlight"
        d={paths.lightHighlight}
        fill="#fff"
        opacity=".2"
        transform="translate(-294.23 -178.65)"
      />
      <path
        className="blob-dark-highlight"
        d={paths.darkHighlight}
        fill="#fff"
        opacity=".2"
        transform="translate(-294.23 -178.65)"
      />
      {blobFace[expression]}
    </g>
  );

  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];
  const viewBox = "0 0 220 200";

  return isAnimated ? (
    <Wrapper
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        /* @ts-expect-error */
        style={{ transform: animationProps.xy.interpolate(bodyTransition) }}
      >
        {getBody()}
      </animated.svg>
    </Wrapper>
  ) : (
    <Wrapper data-testid="not-animated">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        {getBody()}
      </svg>
    </Wrapper>
  );
};

export default Blob;
