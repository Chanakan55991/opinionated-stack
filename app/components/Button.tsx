import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";
import { tokens } from "~/designs/tokens.stylex";

interface Props {
  children: ReactNode;
}

const DARK = "@media (prefers-color-scheme: dark)";

const styles = stylex.create({
  base: {
    borderRadius: 8,
    borderColor: tokens.primaryColor,
    borderStyle: "solid",
    borderWidth: 2,
    backgroundColor: {
      default: "transparent",
      ":hover": tokens.primaryColor,
    },
    transition: "all",
    transitionDuration: 150,
    color: {
      default: tokens.primaryColor,
      ":hover": "white",
    },
    padding: 8,
    cursor: "pointer",
    filter: {
      default: null,
      [DARK]: "invert(1)",
    },
  },
});

export default function Button({ children }: Props) {
  return <button {...stylex.props(styles.base)}>{children}</button>;
}
