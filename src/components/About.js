/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Body, H1 } from "./emotion/Text";
import Box from "./emotion/Box";
import { mq, colors } from "./global";
import Section from "./emotion/Section";
import styled from "@emotion/styled";

const About = () => {
  const headingCss = css({
    marginBottom: "1rem",
  });

  const descriptionCss = css({
    maxWidth: "45rem",
    margin: "0 4vw 0 4vw",
  });

  const Red = styled.span({
    color: colors.reddestRed,
    fontWeight: 600,
  });

  const sectionCss = css(
    mq({
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "row-reverse",
      alignItems: "center",
      flexWrap: ["wrap", "wrap", "wrap", "nowrap", "nowrap"],
    })
  );

  return (
    <Section css={sectionCss} id="about">
      <div css={headingCss}>
        <H1 color="white">About me</H1>
      </div>
      <Box css={descriptionCss}>
        <Body color="black">
          I'm a software engineer at Fabric by Gerber Life with a passion for{" "}
          <Red>learning new technologies</Red> and{" "}
          <Red>solving complex problems.</Red> I'm constantly striving to expand{" "}
          my knowledge and skills in order to create innovative products that
          have a <Red>meaningful impact on the world</Red>, from promoting
          sustainability to increasing access to financial resources.
          <br></br>
          <br></br>Before transitioning to tech, I worked as a radio journalist
          at NPR stations in Milwaukee and Salt Lake City, writing data-driven
          stories that reached{" "}
          <Red>thousands of listeners and readers each day.</Red> <br></br>
          <br></br>I studied software engineering at Grace Hopper's immersive
          coding bootcamp, honing my skills in fullstack development and
          collaborating to create <Red>scalable, bug-free applications.</Red>
        </Body>
      </Box>
    </Section>
  );
};

export default About;
