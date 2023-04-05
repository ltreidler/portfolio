/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { NavLink } from "./emotion/Text";

const barStyles = css({
  width: "100vw",
  height: "3rem",
  position: "fixed",
  backgroundColor: "white",
  top: 0,
  left: 0,
  right: 0,
  borderBottom: "0.2rem solid black",
  display: "flex",
  justifyContent: "flex-end",
});

const Navbar = () => {
  return (
    <section css={barStyles}>
      <ul>
        <NavLink href="#projects">PROJECTS</NavLink>
        <NavLink href="#tech">TECHNOLOGIES</NavLink>
        <NavLink href="#about">ABOUT ME</NavLink>
        <NavLink href="#contact">CONTACT ME</NavLink>
      </ul>
    </section>
  );
};

export default Navbar;
