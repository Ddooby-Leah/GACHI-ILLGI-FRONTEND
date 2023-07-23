import { css } from "@emotion/react";

export const SIZES = {
  small: css`
    padding: 6px 24px;
    font-size: 12px;
    line-height: 18px;
  `,
  medium: css`
    padding: 8px 24px;
    font-size: 14px;
    line-height: 22px;
  `,
  large: css`
    padding: 15px 24px;
    font-size: 16px;
    line-height: 24px;
  `,
  none: css``,
};

export type KeyOfSizes = keyof typeof SIZES;
