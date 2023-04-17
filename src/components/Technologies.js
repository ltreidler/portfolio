/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { H1, H4 } from "./emotion/Text";
import Box from "./emotion/Box";
import Section from "./emotion/Section";
import { BrowserWrapper, TitleAndIcons } from "./emotion/Browser";

const Technologies = () => {
  const technologies = [
    ["Languages", "Javascript", "Python"],
    [
      "Frontend",
      "React",
      "Redux",
      "React Native",
      "Emotion",
      "NextUI",
      "Bootstrap",
      "HTML",
      "CSS",
      "Axios",
    ],
    ["Backend", "Flask", "Express", "JWT", "pandas", "MLxtend"],
    [
      "Databases",
      "MongoDB",
      "Mongoose",
      "PyMongo",
      "Postgres",
      "MySQL",
      "Sequelize",
      "Neo4j",
      "Cypher",
    ],
  ];

  const boxStyles = css({
    width: "fit-content",
    height: "fit-content",
    backgroundColor: "white",
    display: "flex",
    borderTop: "3px solid black",
  });

  const listStyles = css({
    margin: "1rem",
  });

  const articleStyles = css({
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  });

  return (
    <Section color="black" css={articleStyles} id="tech">
      <H1 color="white" css={{ marginBottom: "2rem" }}>
        Technologies
      </H1>
      <Box>
        {technologies.map((list) => (
          <span css={listStyles}>
            <H4 css={{ marginTop: 0, marginBottom: "0.5rem" }}>{list[0]}</H4>
            <>
              {list.slice(1).map((item) => (
                <li>{item}</li>
              ))}
            </>
          </span>
        ))}
      </Box>
    </Section>
  );
};

export default Technologies;
