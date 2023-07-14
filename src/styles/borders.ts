import {css} from '@emotion/react';

export const BORDERS = {
  default: css`
    border: 1px solid #d9d9d9;
  `,
  else: css`
    border: 1px solid transparent;
  `,
};

export type KeyOfBorders = keyof typeof BORDERS;
