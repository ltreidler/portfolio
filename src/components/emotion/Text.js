import styled from "@emotion/styled";
import { colors } from "../global";

export const H1 = styled.h1(
  {
    fontSize: 100,
    fontWeight: 800,
    margin: 0,
    zIndex: 1,
  },
  ({ color }) => ({ color: colors[color] || "black" })
);

export const H2 = styled.h2(
  {
    fontSize: 70,
    fontWeight: 700,
    margin: 0,
  },
  ({ color }) => ({ color: colors[color] || "black" })
);

export const H3 = styled.h2(
  {
    fontSize: 40,
    fontWeight: 600,
  },
  ({ color }) => ({ color: colors[color] || "black" })
);

export const H4 = styled.h2(
  {
    fontSize: 30,
    fontWeight: 600,
  },
  ({ color }) => ({ color: colors[color] || "black" })
);

export const Body = styled.p(
  {
    fontSize: 20,
    fontWeight: 500,
  },
  ({ color }) => ({ color: colors[color] || "black" })
);

export const Link = styled.a(
  {
    fontSize: 18,
    fontWeight: 500,
  },
  ({ color }) => ({ color: colors[color] || "black" })
);

export const NavLink = styled.a({
  textDecoration: "none",
  fontWeight: 500,
  color: "black",
  fontSize: 30,
  marginLeft: "3rem",
  marginRight: "3rem",
});
