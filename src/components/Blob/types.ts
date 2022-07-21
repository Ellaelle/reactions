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

export interface ICustomStyle {
  stroke: string;
  fill: string;
}

export interface IBlobProps {
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
