import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { BUTTON_THEME, ButtonProps } from "./Button.types";
import { COLORS, KeyOfColors } from "@/styles/colors";
import { BORDERS, KeyOfBorders } from "@/styles/borders";
import { KeyOfShapes, SHAPES } from "@/styles/shapes";
import { KeyOfSizes, SIZES } from "@/styles/sizes";

export const StyledButton = styled("button")<ButtonProps>`
  ${({ theme, shape, size }) => {
    const COLOR: KeyOfColors =
      BUTTON_THEME[theme].color ?? BUTTON_THEME["default"].color;
    const BACKGROUND_COLOR: KeyOfColors =
      BUTTON_THEME[theme].backgroundColor ??
      BUTTON_THEME["default"].backgroundColor;
    const HOVER_COLOR: KeyOfColors =
      BUTTON_THEME[theme].hoverColor ?? BUTTON_THEME["default"].hoverColor;
    const BORDER: KeyOfBorders = theme !== "default" ? "else" : "default";
    const SHAPE: KeyOfShapes = shape ?? "rounded";
    const SIZE: KeyOfSizes = size ?? "small";

    return css`
      color: ${COLORS[COLOR]};
      background-color: ${COLORS[BACKGROUND_COLOR]};
      margin-right: 10px;

      ${BORDERS[BORDER]}
      ${SHAPES[SHAPE]}
      ${SIZES[SIZE]}

      &:not(:disabled):hover {
        background-color: ${COLORS[HOVER_COLOR]};
      }

      &:disabled {
        opacity: 0.3;
      }
    `;
  }}
`;
