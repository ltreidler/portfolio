/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { H1, Body, H4, H2 } from "./emotion/Text";
import Box from "./emotion/Box";
import Section from "./emotion/Section";

const Contact = () => {
  const articleStyles = css({
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "3rem",
  });

  const socialsStyle = {
    color: "black",
    margin: "0.5rem",
  };

  const iconCss = css({
    color: "green",
  });

  const boxStyles = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
  });

  return (
    <Section id="contact" css={articleStyles}>
      <H1 color="white" css={{ marginBottom: "3rem", textAlign: "center" }}>
        Let's get in contact!
      </H1>
      <Box css={boxStyles}>
        <H4 color="black">
          Email me @{" "}
          <a href="mailto:leahtreidler@gmail.com">leahtreidler@gmail.com</a>
        </H4>
        <span>
          <Body color="black">Or check me out on:</Body>
          <a
            href="https://www.linkedin.com/in/ltreidler/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-4x" style={socialsStyle}></i>
          </a>
          <a
            href="https://github.com/ltreidler"
            css={iconCss}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-square-github fa-4x"
              style={socialsStyle}
            ></i>
          </a>
        </span>
      </Box>
    </Section>
  );
};

export default Contact;
