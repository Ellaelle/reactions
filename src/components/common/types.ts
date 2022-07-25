export type TExpressions =
  | "happy"
  | "sad"
  | "angry"
  | "awestruck"
  | "indifferent"
  | "surprised"
  | "embarrassed"
  | "worried";

export type TColor = "blue" | "brown" | "green" | "pink" | "yellow" | "red";

// export type TCharacter = {
//   leftEyeTransform: string;
//   rightEyeTransform: string;
//   eyesRadius: string;
//   mouthTransform: string;
//   mouthStrokeWidth: string;
//   eyebrowStroke: string;
//   leftEyebrowTransform: string;
//   rightEyebrowTransform: string;
//   angryMouthTransform: string;
// };

export type IExpressionProps = {
  strokeColor: string;
  isAnimated: boolean;
  animationProps: IAnimationProps;
  character?: any;
};

export interface ICustomStyle {
  stroke: string;
  fill: string;
}

export interface IBodyProps {
  expression: TExpressions;
  color?: TColor;
  isAnimated: boolean;
  customStyle?: ICustomStyle;
}

interface IAnimationConfig {
  mass: number;
  tension: number;
  friction: number;
}

export interface IAnimationProps {
  xy?: { interpolate: any; getValue: () => unknown };
  config?: IAnimationConfig;
}
