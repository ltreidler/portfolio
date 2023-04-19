/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { Body, H3 } from "./emotion/Text";
import { Button } from "./emotion/Button";
import Box from "./emotion/Box";
import { BrowserWrapper, SearchAndIcons } from "./emotion/Browser";
import { PhoneWrapper } from "./emotion/Phone";
import { mq } from "./global";

const ProjectRow = ({
  title,
  description,
  technologies,
  direction,
  browserImg,
  links,
  phoneImgs,
}) => {
  const imgStyle = css({
    borderTop: "3px solid black",
    marginTop: "0.3rem",
  });

  const phoneStyle = css({
    maxHeight: "25rem",
  });

  const sectionStyles = css({
    width: "100%",
    display: "flex",
    flexDirection: `row${direction}`,
    flexWrap: "wrap-reverse",
    justifyContent: "space-around",
    marginBottom: "6rem",
    alignItems: "center",
  });

  const descriptionStyles = css(
    mq({
      width: ["95%", "90%", "90%", "25rem", "25rem"],
      height: "auto",
      flexDirection: "column",
      justifyContent: "flex-start",
      padding: "1rem",
      marginBottom: "2rem",
    })
  );

  return (
    <section css={sectionStyles}>
      {browserImg && (
        <BrowserWrapper>
          <SearchAndIcons link={links[1]} />
          <img className="projectImg" src={browserImg} css={imgStyle} />
        </BrowserWrapper>
      )}

      <>
        {phoneImgs?.map((img, i) => (
          <PhoneWrapper key={i}>
            <img className="projectImg" src={img} css={phoneStyle} />
          </PhoneWrapper>
        ))}
      </>

      <Box border="3" color="white" css={descriptionStyles}>
        <H3 css={{ margin: 0 }}>{title}</H3>
        <Body css={{ margin: "0.5rem" }}>{description}</Body>
        <Body css={{ marginTop: "1rem", marginBottom: 0 }}>
          <b>Technologies:</b>
        </Body>
        <ul>
          {technologies.map((tech, i) => (
            <li key={i}>
              <Body css={{ margin: 0 }}>{tech}</Body>
            </li>
          ))}
        </ul>
        <span>
          {links[0] && (
            <Button
              background="electricPink"
              text="Try a demo"
              link={links[0]}
            />
          )}
          {links[1] && (
            <Button background="grass" text="Go to site" link={links[1]} />
          )}
          {links[2] && (
            <Button
              text="Go to GitHub"
              background="crayolaOrange"
              link={links[2]}
            />
          )}
        </span>
      </Box>
    </section>
  );
};

export default ProjectRow;
