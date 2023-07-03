/** @jsxImportSource @emotion/react */
import { colors } from "./global";
import { css, jsx } from "@emotion/react";
import { H1 } from "./emotion/Text";
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
      "A fullstack food and symptom tracker website. The app analyzes individual user's data to identify potential associations between foods and symptoms. Through d3 graphs, users can easily visualize the app's insights.",
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
      "A fullstack e-commerce plant shop. The site allows users to browse thousands of plants, store items in their carts, and checkout using Stripe payments. Users can keep track of their data by creating a free account or access the site as a guest.",
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
      "https://www.shop-wild-roots.com/",
      "https://github.com/The-Shopperettes/grace-shopper",
    ],
  },
  {
    title: "Dig!",
    phoneImgs: ["dig_2.png", "dig_1.png", "dig_3.png"],
    description:
      "A fullstack mobile dog playdate matching app. The app helps dogs find new friends by ranking potential matches based on shared traits, breeds, friends and preferences.",
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
