import styled from "@emotion/styled";
import { colors } from "../global";
import { mq } from "../global";

export const H1 = styled.h1(({ color }) =>
  mq({
    fontSize: [55, 60, 80, 90, 100],
    fontWeight: 800,
    margin: 0,
    zIndex: 1,
    color: colors[color] || "black",
  })
);

export const H2 = styled.h2(({ color }) =>
  mq({
    fontSize: [40, 45, 60, 70, 80],
    fontWeight: 700,
    margin: 0,
    color: colors[color] || "black",
  })
);

export const H3 = styled.h2(({ color }) =>
  mq({
    fontSize: [20, 25, 35, 40, 40],
    fontWeight: 600,
    color: colors[color] || "black",
  })
);

export const H4 = styled.h2(({ color }) =>
  mq({
    fontSize: [18, 20, 23, 25, 30],
    fontWeight: 600,
    color: colors[color] || "black",
  })
);

export const Body = styled.p(({ color }) =>
  mq({
    fontSize: [16, 18, 16, 17, 20],
    fontWeight: 500,
    color: colors[color] || "black",
  })
);

export const Link = styled.a(({ color }) =>
  mq({
    fontSize: [14, 15, 16, 17, 18],
    fontWeight: 500,
    color: colors[color] || "black",
  })
);

export const NavLink = styled.a(
  mq({
    textDecoration: "none",
    fontWeight: 500,
    color: "black",
    fontSize: [10, 12, 18, 20, 30],
    marginLeft: "3rem",
    marginRight: "3rem",
  })
);

export const NavbarLink = styled.button(
  mq({
    textDecoration: "none",
    fontSize: [16, 18, 16, 17, 20],
    fontWeight: 600,
    color: "black",
    transition: "0.3s",
    marginRight: "2rem",
    border: "0px",
    backgroundColor: "white",
    "&:hover": {
      color: colors.royalBlue,
      transform: "translate(0,-0.1rem)",
    },
  })
);
