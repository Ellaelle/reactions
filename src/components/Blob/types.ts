type TExpressions = "happy" | "sad" | "awestruck" | "indifferent"
export type TColors = "default" | "neutral" | "green" | "pink"

export interface IBlobProps {
    expression: TExpressions,
    color: TColors
}