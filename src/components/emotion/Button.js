/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { colors } from "../global";

export const Button = ({ background, text, link, color }) => {
  const hover = {
    backgroundColor: "white",
    color: "black",
  };

  const buttonStyles = css({
    backgroundColor: colors[background] || colors.goldenrod,
    width: "10rem",
    height: "3rem",
    border: "3px solid black",
    fontWeight: "500",
    fontSize: "12px",
    margin: "0.5rem",
    color: colors[color] || "black",
    fontSize: "20px",
    boxShadow: "0.3rem 0.3rem black",
    "&:hover,&:focus": hover,
  });

  return (
    <a href={link}>
      <button css={buttonStyles}>{text}</button>
    </a>
  );
};
