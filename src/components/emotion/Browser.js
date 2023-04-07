/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../global";

export const BrowserWrapper = styled.div(({ color }) => ({
  height: "110%",
  border: "3px solid black",
  width: "fit-content",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  boxShadow: "-0.5rem 0.5rem black",
  paddingTop: "0.3rem",
  backgroundColor: colors[color] || "white",
}));

export const Icons = () => {
  const iconStyle = {
    color: "black",
    margin: "0.4rem 0rem 0.4rem 0.4rem",
  };

  return (
    <span css={{ display: "flex" }}>
      {[1, 2, 3].map(() => (
        <i className="fa-regular fa-circle fa-md" style={iconStyle}></i>
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
        <a href={link}>{link}</a>
      </div>
    </span>
  );
};
