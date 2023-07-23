import { css } from "@emotion/react";

export const SHAPES = {
  default: css`
    border-radius: 0;
  `,
  rounded: css`
    border-radius: 0.25rem;
  `,
  pill: css`
    border-radius: 5rem;
  `,
  none: css`
    border-radius: 0;
    border: none;
  `,
};

export type KeyOfShapes = keyof typeof SHAPES;
