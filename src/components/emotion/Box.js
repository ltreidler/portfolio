import styled from "@emotion/styled";

const Box = styled.div(({ border, shadow }) => ({
  display: "flex",
  padding: "1rem",
  backgroundColor: "white",
  zIndex: 1,
  // transition: "0.3s",
  // "&:hover": {
  //   transform: "translate(0, -5px)",
  // },
}));

export default Box;
