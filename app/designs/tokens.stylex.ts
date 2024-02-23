import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const tokens = stylex.defineVars({
  primaryText: { default: "black", [DARK]: "white" },
  secondaryText: "#333",
  primaryColor: "rebeccapurple",
  backgroundColor: { default: "white", [DARK]: "#06050a" },
});
