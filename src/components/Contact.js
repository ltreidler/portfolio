/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { H1, Body, H4 } from "./emotion/Text";
import Box from "./emotion/Box";
import Section from "./emotion/Section";

const Contact = () => {
  const articleStyles = css({
    flexDirection: "column",
    alignItems: "center",
  });

  const boxStyle = css({
    width: "45%",
    height: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5rem",
    flexDirection: "column",
    textAlign: "center",
  });

  const socialsStyle = {
    color: "black",
    margin: "0.5rem",
  };

  return (
    <Section id="contact" color="rust" css={articleStyles}>
      <H1 css={{ fontSize: "80px" }}>Let's get in contact!</H1>
      <Box shadow="1rem 1rem" color="white" css={boxStyle}>
        <H4 color="black">Email me @ leahtreidler@gmail.com</H4>
        <span>
          <Body color="black">Or check me out on:</Body>
          <a href="https://github.com/ltreidler">
            <i class="fa-brands fa-linkedin fa-4x" style={socialsStyle}></i>
          </a>
          <a href="https://www.linkedin.com/in/ltreidler/">
            <i
              class="fa-brands fa-square-github fa-4x"
              style={socialsStyle}
            ></i>
          </a>
        </span>
      </Box>
    </Section>
  );
};

export default Contact;
