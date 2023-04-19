/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Body, H1 } from "./emotion/Text";
import Box from "./emotion/Box";
import { mq } from "./global";
import Section from "./emotion/Section";

const About = () => {
  const headingCss = css({
    marginBottom: "1rem",
  });

  const descriptionCss = css({
    maxWidth: "45rem",
    margin: "0 4vw 0 4vw",
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
          passion for learning new technologies and solving complex problems.
          I'm constantly striving to expand my knowledge and skills in order to
          create innovative and impactful products. <br></br>
          <br></br> During my time at the Grace Hopper coding bootcamp, I had
          the opportunity to collaborate with others and hone my skills in
          building fully-functional websites. The experience gave me the
          confidence to pursue a career in software engineering and I'm excited
          about the possibilities that lie ahead.
        </Body>
      </Box>
    </Section>
  );
};

export default About;
