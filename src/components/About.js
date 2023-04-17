/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { Body, H1 } from "./emotion/Text";
import Box from "./emotion/Box";
import Section from "./emotion/Section";
import { BrowserWrapper, TitleAndIcons } from "./emotion/Browser";

const About = () => {
  return (
    <Section
      css={{
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "3rem",
      }}
      id="about"
    >
      <H1
        css={{
          display: "flex",
          marginRight: "5vw",
          marginBottom: "1rem",
        }}
        color="white"
      >
        About me
      </H1>
      <div css={{ display: "flex" }}>
        <Box css={{ maxWidth: "80%" }}>
          <Body color="black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. <br></br>
            <br></br> Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Body>
        </Box>
      </div>
    </Section>
  );
};

export default About;
