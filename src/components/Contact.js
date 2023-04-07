/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { H1, Body, H4 } from "./emotion/Text";
import Box from "./emotion/Box";
import Section from "./emotion/Section";
import { BrowserWrapper, TitleAndIcons } from "./emotion/Browser";
import { colors } from "./global";

const Contact = () => {
  const articleStyles = css({
    flexDirection: "column",
    alignItems: "center",
  });

  const boxStyle = css({
    height: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    borderTop: "3px solid black",
    padding: "2rem",
    backgroundColor: colors.parchment,
  });

  const socialsStyle = {
    color: "black",
    margin: "0.5rem",
  };

  return (
    <Section id="contact" color="rust" css={articleStyles}>
      <H1 css={{ fontSize: "80px", marginBottom: "3rem" }}>
        Let's get in contact!
      </H1>
      <BrowserWrapper color="taxiCab">
        <TitleAndIcons text="contact.pdf" />
        <div css={boxStyle}>
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
        </div>
      </BrowserWrapper>
    </Section>
  );
};

export default Contact;
