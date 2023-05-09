/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { colors } from "../global";
import { useEffect, useState } from "react";

export const Button = ({ background, text, link, color, width }) => {
  const hover = {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0.3rem 0.3rem black",
    transform: "translate(0, -0.3rem)",
  };

  const buttonStyles = css({
    backgroundColor: colors[background] || colors.goldenrod,
    width: width || "10rem",
    height: "3rem",
    border: "3px solid black",
    fontWeight: "500",
    fontSize: "12px",
    margin: "0.5rem",
    color: colors[color] || "black",
    fontSize: "20px",
    transition: "0.3s",
    borderRadius: "5px",
    "&:hover,&:focus": hover,
  });

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button css={buttonStyles}>{text}</button>
    </a>
  );
};

export const NavButton = ({ background, text, link, color, width }) => {
  const hover = {
    backgroundColor: "white",
    color: "black",
  };

  const [linkedView, setLinkedView] = useState(null);

  useEffect(() => {
    setLinkedView(document.getElementById(link));
  }, []);

  const onClick = () => {
    linkedView.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const buttonStyles = css({
    backgroundColor: colors[background] || colors.goldenrod,
    width: width || "10rem",
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
    <button onClick={onClick} css={buttonStyles}>
      {text}
    </button>
  );
};
