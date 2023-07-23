import { HTMLAttributes, ReactNode, ComponentProps } from "react";
import type { KeyOfColors } from "@/styles/colors";
import { KeyOfSizes } from "@/styles/sizes";
import { KeyOfShapes } from "@/styles/shapes";
import Icon from "../Icon/Icon";
import Button from "./Button";

type ButtonStyleProps = {
  color: KeyOfColors;
  backgroundColor: KeyOfColors;
  hoverColor: KeyOfColors;
};

type ButtonThemeNames =
  | "default"
  | "primary"
  | "secondary"
  | "red"
  | "dark"
  | "kakao"
  | "none";
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
  kakao: {
    color: "black085",
    backgroundColor: "kakao",
    hoverColor: "kakao",
  },
  none: {
    color: "none",
    backgroundColor: "none",
    hoverColor: "none",
  },
};

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLElement> {
  children?: ReactNode;

  /** 스타일 타입 */
  width?: string;
  height?: string;
  theme?: ButtonThemeNames;
  shape?: KeyOfShapes;
  size?: KeyOfSizes;
  disabled?: boolean;

  /** 이벤트 */
  onClick?: () => void;
  onMouseDown?: () => void;
}

export type IconButtonProps = ComponentProps<typeof Icon> &
  ComponentProps<typeof Button>;
