/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { H1, H2, H3 } from "./emotion/Text";
import Section from "./emotion/Section";
import {
  BrowserWrapper,
  SearchAndIcons,
  Icons,
  TitleAndIcons,
} from "./emotion/Browser";
import { NavButton } from "./emotion/Button";
import Box from "./emotion/Box";

const NavItem = ({ text, link }) => {
  const navCss = css({
    textAlign: "right",
    transition: "0.3s",
    "&:hover": {
      color: "goldenrod",
      transform: "translate(0, -5px)",
    },
  });

  const scroll = (id) => {
    const view = document.getElementById(id);
    if (!view) return;
    view.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button css={{background: "transparent",
    border: "0px",}} onClick={() => scroll(link)}>
      <H2 css={navCss} color="white">
        {text}
      </H2>
    </button>
  );
};

const Heading = () => {
  const headingStyle = css({
    margin: 0,
    paddingTop: "10vh",
    flexDirection: "column",
    zIndex: 10,
    display: "flex",
    height: "80vh",
    justifyContent: "space-between",
  });

  const nameSectionStyle = css({
    display: "flex",
    flexDirection: "column",
  });

  const navSection = css({
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  });

  const navLinks = [
    ["Projects", "projects"],
    ["Technologies", "tech"],
    ["About", "about"],
    ["Contact", "contact"],
  ];

  return (
    <Section css={headingStyle} color="black" id="start">
      <div css={{ display: "flex", justifyContent: "flex-end" }}>
        <section css={navSection}>
          {navLinks.map(([text, link]) => (
            <NavItem text={text} link={link} />
          ))}
        </section>
      </div>

      <section css={nameSectionStyle}>
        <H1 color="white">Leah Treidler</H1>
        <H2 color="white">Fullstack software engineer</H2>
      </section>
    </Section>
  );
};

export default Heading;
