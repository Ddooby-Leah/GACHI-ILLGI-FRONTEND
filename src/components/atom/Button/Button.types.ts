import { HTMLAttributes, ReactNode } from "react";
import type { KeyOfColors } from "@/styles/colors";
import { KeyOfSizes } from "@/styles/sizes";
import { KeyOfShapes } from "@/styles/shapes";

type ButtonStyleProps = {
  color: KeyOfColors;
  backgroundColor: KeyOfColors;
  hoverColor: KeyOfColors;
};

type ButtonThemeNames = "default" | "primary" | "secondary" | "red" | "dark";
type ButtonThemeProps = Record<ButtonThemeNames | string, ButtonStyleProps>;

export const BUTTON_THEME: ButtonThemeProps = {
  default: {
    color: "black",
    backgroundColor: "white",
    hoverColor: "white_hover",
  },
  primary: {
    color: "white",
    backgroundColor: "primary",
    hoverColor: "primary_hover",
  },
  secondary: {
    color: "primary",
    backgroundColor: "secondary",
    hoverColor: "secondary_hover",
  },
  red: {
    color: "white",
    backgroundColor: "red",
    hoverColor: "red_hover",
  },
  dark: {
    color: "black",
    backgroundColor: "dark",
    hoverColor: "dark_hover",
  },
};

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLElement> {
  children?: ReactNode;

  /** 스타일 타입 */
  // width?: string;
  // height?: string;
  theme?: ButtonThemeNames;
  shape?: KeyOfShapes;
  size?: KeyOfSizes;
  disabled?: boolean;

  /** 이벤트 */
  onClick?: () => void;
  onMouseDown?: () => void;
}
