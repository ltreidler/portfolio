/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { colors } from "../global";
import { css } from "@emotion/react";
import { H1 } from "./Text";

const top = 26.9;
const left = 4.89;

const arrowDown = css({
  borderLeft: "0rem solid transparent",
  borderRight: "8rem solid transparent",
  borderTop: "6rem solid white",
  position: "absolute",
  top: `${top}rem`,
  left: `${left}rem`,
  zIndex: "1",
});

const arrowDownShadow = css({
  borderLeft: "0rem solid transparent",
  borderRight: "8rem solid transparent",
  borderTop: "6rem solid black",
  position: "absolute",
  top: `${top + 0.4}rem`,
  left: `${left + 1.01}rem`,
});

const arrowDownBorder = css({
  borderLeft: "0rem solid transparent",
  borderRight: "8rem solid transparent",
  borderTop: "6.2rem solid black",
  position: "absolute",
  top: `${top + 0.4}rem`,
  left: `${left - 0.39}rem`,
});

const Speech = styled.div(({ border, color }) => ({
  border: `${border || 6}px solid black`,
  display: "flex",
  padding: "1rem",
  boxShadow: `1rem 1rem 0 black`,
  backgroundColor: colors[color] || colors.burntSienna,
}));

export default (props) => (
  <>
    <Speech {...props}>
      <H1>
        Hi, <br></br>I'm Leah
      </H1>
    </Speech>
    <span>
      <div css={arrowDown}></div>
      <div css={arrowDownBorder}></div>
      <div css={arrowDownShadow}></div>
    </span>
  </>
);
