import type { Config } from "tailwindcss";
import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

export function generateDarkenColorFrom(
  input: string,
  percentage = 0.07
): string {
  return colord(input).darken(percentage).toHex();
}

export function generateForegroundColorFrom(
  input: string,
  percentage = 0.8
): string {
  return colord(input)
    .mix(colord(input).isDark() ? "white" : "black", percentage)
    .toHex();
}

type ColorObject = {
  [key: string]: string;
};

export const tailwindColors: ColorObject = {
  white: "#ffffff",
  black: "#000000",
  current: "currentColor",
  transparent: "transparent",
  primary: "#1A43D3",
  "primary-content": "#FFFFFF",
  "primary-focus": generateDarkenColorFrom("#1A43D3"),
  secondary: "#E5E5E5",
  "secondary-content": "#000000",
  "secondary-focus": generateDarkenColorFrom("#E5E5E5"),
  "input-content": "#000000 ",
  error: "#B02626",
  info: "#3abff8",
  "info-content": generateForegroundColorFrom("#3abff8"),
  success: "#36d399",
  "success-content": generateForegroundColorFrom("#36d399"),
  warning: "#F5AC1F ",
  "warning-content": generateForegroundColorFrom("#F5AC1F "),
  "base-content": "#757575",
  "base-50": "#F4F4F4",
  "base-100": "#E1E1E9",
  "base-200": "#E0E0E0",
  "base-500": "#A0A0B3",
  "base-600": "#414267",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: tailwindColors,
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "3rem",
          xl: "4rem",
        },
        screens: {
          max: "1320px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
