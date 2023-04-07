import styled from "@emotion/styled";

const Box = styled.div(({ border, shadow }) => ({
  border: `${border || 6}px solid black`,
  display: "flex",
  padding: "1rem",
  boxShadow: `${shadow || "1rem 1rem"} 0 black`,
  backgroundColor: "white",
  zIndex: 1,
}));

export default Box;
