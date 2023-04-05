/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { H1, H2 } from "./emotion/Text";

const { burntSienna, royalBlue } = colors;

const boxStyle = css({
  backgroundColor: burntSienna,
  width: "45%",
  height: "15rem",
  boxShadow: "-1rem 1rem 0 #000000",
  border: "6px solid black",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  padding: "1rem",
  marginTop: "5rem",
});

const lineStyle = css({
  backgroundColor: royalBlue,
  width: "40%",
  height: "100%",
  border: "6px solid black",
  padding: "2rem",
  marginRight: "10rem",
  boxShadow: "1rem 1rem 0 #000000",
});

const articleStyle = css({
  margin: 0,
  width: "100vw",
  height: "110%",
});

const sectionStyle = css({
  display: "flex",
});

const Heading = () => {
  return (
    <article css={articleStyle}>
      <section css={sectionStyle}>
        <div css={boxStyle}>
          <H1 color="white">Hi, I'm Leah</H1>
        </div>
      </section>

      <section
        css={[sectionStyle, { justifyContent: "flex-end", marginTop: "5rem" }]}
      >
        <div css={lineStyle}>
          <H2 color="white" css={{ marginBottom: "1rem" }}>
            I'm a fullstack software engineer
          </H2>
        </div>
      </section>
    </article>
  );
};

export default Heading;
