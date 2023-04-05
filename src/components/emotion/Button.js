import styled from "@emotion/styled";
import { colors } from "../global";

const hover = {
  backgroundColor: "white",
  color: "black",
};

export const Button = styled.button((props) => ({
  backgroundColor: colors[props.color] || colors.burntSienna,
  borderRadus: "10%",
  maxWidth: "10rem",
  boxShadow: "1rem 1rem",
  border: "1rem solid black",
  boxShadow: "1rem 1rem 0 #000000",
  fontWeight: "500",
  fontSize: "12px",
  "&:hover,&:focus": hover,
}));
