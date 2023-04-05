//global styles
import facepaint from "facepaint";

//breakpoints
const breakpoints = [576, 768, 992, 1200];

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
};
