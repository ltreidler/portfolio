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
          I'm a former filmmaker and journalist turned software engineer with a
          passion for <Red>learning new technologies</Red> and{" "}
          <Red>solving complex problems.</Red> I'm constantly striving to expand
          my knowledge and skills in order to create innovative and impactful
          products. <br></br>
          <br></br> I studied software engineering at{" "}
          <Red>Grace Hopper's immersive coding bootcamp</Red>, where I spent 16
          weeks learning fullstack development and collaborating to create
          fully-functional projects.
          <br></br>
          <br></br>
          As a software engineer, I'm interested in working in backend or
          fullstack development,
          <Red> building data-driven applications</Red> that leverage the latest
          technologies and tools to create scalable, innovative products.
          Ultimately, I hope to use my technical skills to create accessible
          applications that <Red>improve users' lives.</Red>
          <br></br>
          <br></br>I have experience in <Red>fast-paced environments</Red> where
          attention to detail is critical. Before transitioning to tech, I
          worked as a radio journalist at NPR stations in Milwaukee and Salt
          Lake City. In those roles, I analyzed large datasets to write
          impactful articles and radio spots that reached{" "}
          <Red>thousands of listeners and readers each day.</Red>
          <br></br>
          <br></br>
          Currently, I work as the Digital Content Manager for Creativity
          Partners, a consulting firm, managing their website, building their
          brand guide, and designing digital materials.
          <br></br>
          <br></br>
          Now, I'm <Red>searching for a new position</Red> where I can use my
          technical skills to make impactful products.
        </Body>
      </Box>
    </Section>
  );
};

export default About;
