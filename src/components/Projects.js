/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { Body, H3, H2, H1 } from "./emotion/Text";
import ProjectRow from "./ProjectRow";
import Section from "./emotion/Section";

const articleStyles = css({
  flexDirection: "column",
  marginTop: "4rem",
});

const projectsArray = [
  {
    title: "Seed",
    browserImg: "seed_screenshot.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Next UI",
      "Flask",
      "Python",
      "pandas",
      "JWT",
      "bcrypt",
      "MLxtend",
      "MongoDB",
    ],
    links: [
      "https://seed-tracker.herokuapp.com/demo/login",
      "https://seed-tracker.herokuapp.com",
      "https://github.com/seed-tracker/seed",
    ],
  },
  {
    title: "Wild Roots",
    browserImg: "wild_roots_screenshot.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Bootstrap",
      "Express",
      "JWT",
      "Sequelize",
      "PostgreSQL",
    ],
    links: [
      null,
      "https://wild-roots.onrender.com/",
      "https://github.com/The-Shopperettes/grace-shopper",
    ],
  },
  {
    title: "Dig!",
    phoneImgs: ["dig_2.png", "dig_1.png", "dig_3.png"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    technologies: [
      "React Native",
      "Redux",
      "Node.js",
      "Neo4j",
      "Cypher",
      "Express",
    ],
    links: [null, null, "https://github.com/ltreidler/dig_mobile"],
  },
];

const Projects = () => (
  <Section id="projects" css={articleStyles}>
    <H1 css={{ marginBottom: "3rem" }} color="white">
      Projects
    </H1>
    {projectsArray.map((project, i) => (
      <ProjectRow
        {...project}
        key={i}
        direction={i % 2 === 1 ? "-reverse" : ""}
        css={{ zIndex: 1 }}
      />
    ))}
  </Section>
);

export default Projects;
