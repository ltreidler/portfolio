/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../global";
import { mq } from "../global";

export const BrowserWrapper = styled.div(({ color }) =>
  mq({
    height: "fit-content",
    width: ["95%", "95%", "95%", "90%", "50%"],
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    paddingTop: "0.3rem",
    backgroundColor: colors[color] || "white",
    transition: "0.3s",
    "&:hover": {
      transform: "translate(0, -5px)",
    },
  })
);

export const Icons = () => {
  const iconStyle = {
    color: "black",
    margin: "0.4rem 0rem 0.4rem 0.4rem",
  };

  return (
    <span css={{ display: "flex" }}>
      {[1, 2, 3].map((i) => (
        <i className="fa-regular fa-circle fa-md" style={iconStyle} key={i}></i>
      ))}
    </span>
  );
};

export const TitleAndIcons = ({ text }) => {
  return (
    <span css={{ display: "flex", alignItems: "center" }}>
      <Icons />
      <span css={{ marginLeft: "30%" }}>{text}</span>
    </span>
  );
};

export const SearchAndIcons = ({ link }) => {
  const searchStyle = css({
    width: "80%",
    border: "2px solid black",
    borderRadius: "6px",
    marginLeft: "1rem",
    padding: "0.1rem",
    backgroundColor: "white",
  });

  return (
    <span css={{ display: "flex", alignItems: "center" }}>
      <Icons />
      <div css={searchStyle}>
        <a
          css={{ textDecoration: "none" }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link}
        </a>
      </div>
    </span>
  );
};
