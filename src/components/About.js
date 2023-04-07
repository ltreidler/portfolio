/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { Body, H1 } from "./emotion/Text";
import Box from "./emotion/Box";
import Section from "./emotion/Section";

const About = () => {
  const boxStyles = css({
    width: "50%",
  });

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
      <Box shadow="-1rem 1rem" color="electricBlue" css={boxStyles}>
        <Body color="black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. <br></br>
          <br></br> Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Body>
      </Box>
    </Section>
  );
};

export default About;
