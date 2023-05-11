/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const PhoneWrapper = styled.div({
  border: "6px solid white",
  height: "fit-content",
  borderRadius: "5px",
  marginBottom: "1.5rem",
  transition: "0.3s",
  "&:hover": {
    transform: "translate(0, -5px)",
  },
});
