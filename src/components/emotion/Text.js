import styled from "@emotion/styled";
import { colors } from "../global";
import { mq } from "../global";

export const H1 = styled.h1(({ color }) =>
  mq({
    fontSize: [70, 80, 90, 100],
    fontWeight: 800,
    margin: 0,
    zIndex: 1,
    color: colors[color] || "black",
  })
);

export const H2 = styled.h2(({ color }) =>
  mq({
    fontSize: [50, 60, 70, 80],
    fontWeight: 700,
    margin: 0,
    color: colors[color] || "black",
  })
);

export const H3 = styled.h2(({ color }) =>
  mq({
    fontSize: [25, 35, 40, 40],
    fontWeight: 600,
    color: colors[color] || "black",
  })
);

export const H4 = styled.h2(({ color }) =>
  mq({
    fontSize: [20, 23, 25, 30],
    fontWeight: 600,
    color: colors[color] || "black",
  })
);

export const Body = styled.p(({ color }) =>
  mq({
    fontSize: [18, 16, 17, 20],
    fontWeight: 500,
    color: colors[color] || "black",
  })
);

export const Link = styled.a(({ color }) =>
  mq({
    fontSize: [10, 12, 14, 18],
    fontWeight: 500,
    color: colors[color] || "black",
  })
);

export const NavLink = styled.a(
  mq({
    textDecoration: "none",
    fontWeight: 500,
    color: "black",
    fontSize: [12, 18, 20, 30],
    marginLeft: "3rem",
    marginRight: "3rem",
  })
);
