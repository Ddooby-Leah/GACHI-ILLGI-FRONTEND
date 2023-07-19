export const COLORS = {
  primary: "#0080ff",
  secondary: "#ebf5ff",
  white: "#fff",
  gray: "#BEBEBF",
  lightgray: "#f8f9fb",
  dark: "#44444414",
  black: "#000",
  red: "#E76055",

  /* status */
  error: "#fa1e0e",
  warning: "#fef9a7",
  success: "#59ce8f",

  /* hover */
  primary_hover: "#0075eb",
  secondary_hover: "#d6eaff",
  white_hover: "#fafafa",
  black_hover: "#3e3e3e",
  red_hover: "#D4584E",
  dark_hover: "#4444442e",

  /* disabled */
  primary_disabled: "#b2d8ff",
  secondary_disabled: "#f5faff",
  white_disabled: "#fafdff",
  black_disabled: "#3e3e3e",
};

export type KeyOfColors = keyof typeof COLORS;
