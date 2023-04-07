/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { H1, H2 } from "./emotion/Text";
import Box from "./emotion/Box";
import Speech from "./emotion/Speech";
import Section from "./emotion/Section";

const Heading = () => {
  const top = 27.126;
  const right = 44;

  const boxStyle = css({
    width: "45%",
    height: "15rem",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    marginTop: "5rem",
    zIndex: 1,
  });

  const secondBoxStyle = css({
    width: "50%",
    height: "100%",
    padding: "2rem",
    marginRight: "10rem",
    zIndex: 1,
  });

  const headingStyle = css({
    margin: 0,
    flexDirection: "column",
    zIndex: 1,
  });

  const sectionStyle = css({
    display: "flex",
  });

  const rectangleStyles = css({
    height: "5.8rem",
    position: "absolute",
    clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 20% 100%)",
  });

  const topRectangleStyles = css({
    backgroundColor: "white",
    top: `${top}rem`,
    right: `${right}rem`,
    zIndex: 2,
    width: "6rem",
  });

  const bottomRectangleStyles = css({
    backgroundColor: "black",
    top: `${top}rem`,
    right: `${right - 0.5}rem`,
    width: "7rem",
  });

  return (
    <Section css={headingStyle} color="grass">
      <section css={sectionStyle}>
        <Speech shadow="-1rem 1rem" color="white" css={boxStyle}>
          <H1 color="black"></H1>
        </Speech>
      </section>
      <div css={[rectangleStyles, topRectangleStyles]}></div>
      <div css={[rectangleStyles, bottomRectangleStyles]}></div>

      <section
        css={[sectionStyle, { justifyContent: "flex-end", marginTop: "5rem" }]}
      >
        <Box color="electricPink" css={secondBoxStyle}>
          <H2 color="black" css={{ marginBottom: "1rem" }}>
            I'm a fullstack software engineer
          </H2>
        </Box>
      </section>
    </Section>
  );
};

export default Heading;
