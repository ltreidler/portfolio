/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { colors } from "../global";

const grid = colors.white + "40";

const Section = styled.section(({ color }) => ({
  width: "91%",
  display: "flex",
  margin: 0,
  padding: "4rem",
  borderTop: "0.3rem solid black",
  backgroundColor: colors[color],
  backgroundImage: `linear-gradient(${grid} .1em, transparent .1em), linear-gradient(90deg, ${grid} .1em, transparent .1em)`,
  backgroundSize: "3em 3em",
  zIndex: 3,
}));

export default Section;
