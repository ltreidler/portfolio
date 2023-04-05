/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { H1, H2 } from "./emotion/Text";

const sectionStyles = css({
  border: "3px solid black",
  borderRadius: "5%",
  width: "10rem",
  height: "10rem",
});

const ProjectCard = ({ imgUrl }) => {
  return (
    <section css={sectionStyles}>
      <img src={imgUrl} />
    </section>
  );
};

export default ProjectCard;
