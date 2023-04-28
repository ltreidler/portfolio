//global styles
import facepaint from "facepaint";

const breakpoints = [400, 576, 768, 992, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

export const colors = {
  royalBlue: "#294AA8",
  goldenrod: "#FAD26C",
  white: "#ffffff",
  black: "#000000",
  deepPurple: "#472982",
  rust: "#D93E30",
  taxiCab: "#F2CB07",
  orangeCrayon: "#F29F05",
  grass: "#7ABF49",
  brightBlue: "#6D8EF2",
  sunsetRed: "#F25D50",
  electricBlue: "#0031F4",
  sun: "#FFDC06",
  crayolaOrange: "#F2B705",
  electricPink: "#F28DE1",
  reddestRed: "#FF0B0B",
};
