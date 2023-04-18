//global styles
import facepaint from "facepaint";

//breakpoints
const breakpoints = [400, 576, 768, 992, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media (min-width: ${bp}px)`)
);

//to use:
// render(
//     <div
//       css={mq({
//         color: ['green', 'gray', 'hotpink']
//       })}
//     >
//       Some text.
//     </div>
//   )

//colors
export const colors = {
  parchment: "#F8EDDA",
  royalBlue: "#294AA8",
  midnightGreen: "#0B5B65",
  seafoam: "#259E9E",
  burntSienna: "#C03022",
  goldenrod: "#FAD26C",
  //goldenrod: "#F9B719",
  offWhite: "#fffff1",
  white: "#ffffff",
  black: "#000000",
  deepPurple: "#472982",
  //to test

  rust: "#D93E30",
  sunsetPink: "#F55D98",
  forest: "#2A6450",
  powderBlue: "#8CB9C4",
  //from medium
  taxiCab: "#F2CB07",
  sand: "#FFF1E8",
  orangeCrayon: "#F29F05",
  grass: "#7ABF49",
  brightBlue: "#6D8EF2",
  sunsetRed: "#F25D50",
  electricBlue: "#6FCDDF",
  sun: "#FFDC06",
  bluestBlue: "#3300FF",
  //gumroad
  pondWater: "#26A68E",
  crayolaOrange: "#F2B705",
  electricPink: "#F28DE1",
  powderedBlue: "#99B6F2",
};
