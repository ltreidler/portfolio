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

const Heading = () => {
  const headingStyle = css({
    margin: 0,
    flexDirection: "column",
    zIndex: 1,
  });

  const sectionStyle = css({
    display: "flex",
    height: "100vh",
  });

  const hiDiv = css({
    borderTop: "3px solid black",
    backgroundColor: colors.parchment,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  });

  const leahDiv = css({
    borderTop: "3px solid black",
    backgroundColor: colors.parchment,
    display: "flex",
    alignItems: "center",
    padding: "1rem",
  });

  const engineerDiv = css({
    borderTop: "3px solid black",
    backgroundColor: colors.parchment,
    width: "25vw",
    paddingLeft: "3rem",
  });

  const navigationDiv = css({
    borderTop: "3px solid black",
    backgroundColor: colors.parchment,
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
  });

  const leahBrowser = css({
    top: "13rem",
    position: "absolute",
    height: "fit-content",
    left: "23rem",
    zIndex: 2,
  });

  const navigationBrowser = css({
    top: "30rem",
    position: "absolute",
    height: "fit-content",
    width: "fit-content",
    left: "23rem",
    zIndex: 2,
  });

  const hiBrowser = css({
    marginLeft: "4vw",
    height: "fit-content",
  });

  const engineerBrowser = css({
    right: "4vw",
    top: "8vw",
    height: "fit-content",
    position: "absolute",
  });

  return (
    <Section css={headingStyle} color="grass">
      <section css={sectionStyle}>
        <BrowserWrapper css={hiBrowser} color="rust">
          <TitleAndIcons text="Alert!" />
          <div css={hiDiv}>
            <i
              class="fa-solid fa-triangle-exclamation fa-4x"
              style={{ color: colors.orangeCrayon }}
            ></i>
            <H2 css={{ padding: "2rem" }}>Hi!</H2>
          </div>
        </BrowserWrapper>
        <BrowserWrapper css={leahBrowser} color="electricBlue">
          <TitleAndIcons text="Welcome!" />
          <div css={leahDiv}>
            <H2 css={{ padding: "2rem" }}>I'm Leah</H2>
            <i
              class="fa-regular fa-face-smile fa-4x"
              style={{ color: colors.black }}
            ></i>
          </div>
        </BrowserWrapper>
        <BrowserWrapper css={engineerBrowser} color="electricPink">
          <Icons />
          <div css={engineerDiv}>
            <H3>I'm a fullstack software engineer</H3>
          </div>
        </BrowserWrapper>
        <BrowserWrapper css={navigationBrowser} color="taxiCab">
          <Icons />
          <div css={navigationDiv}>
            <H3>What would you like to see?</H3>
            <span>
              <NavButton
                text="Projects"
                background="grass"
                width="9rem"
                link="projects"
              />
              <NavButton
                text="Technologies"
                background="orangeCrayon"
                width="9rem"
                link="tech"
              />
              <NavButton
                text="About"
                background="electricPink"
                width="9rem"
                link="about"
              />
              <NavButton
                text="Contact"
                background="sunsetRed"
                width="9rem"
                link="contact"
              />
            </span>
          </div>
        </BrowserWrapper>
      </section>
    </Section>
  );
};

export default Heading;
