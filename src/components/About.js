/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { Body, H1 } from "./emotion/Text";
import Box from "./emotion/Box";
import Section from "./emotion/Section";
import { BrowserWrapper, TitleAndIcons } from "./emotion/Browser";

const About = () => {
  return (
    <Section css={{ flexDirection: "column" }} color="electricPink" id="about">
      <H1
        css={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "5vw",
        }}
      >
        About me
      </H1>
      <BrowserWrapper color="electricBlue">
        <TitleAndIcons text="me.txt" />
        <div
          css={{
            width: "50vw",
            padding: "1rem",
            borderTop: "3px solid black",
            backgroundColor: colors.parchment,
          }}
        >
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
        </div>
      </BrowserWrapper>
    </Section>
  );
};

export default About;
