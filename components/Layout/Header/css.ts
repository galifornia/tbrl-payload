import { createUseStyles } from "react-jss";
import { base } from "../../../css/base";
import colors from "../../../css/colors";
import { strokeWidth, headerHeight } from "../../../css/sizes";
import color from "color";
import zIndex from "../../../css/zIndex";
import queries from "../../../css/queries";
import transitions from "../../../css/transitions";

export default createUseStyles({
  header: {
    padding: base(2),
    display: "flex",
    justifyContent: "space-between",
    zIndex: zIndex.header,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    pointerEvents: "none",
    [queries.m]: {
      padding: base(1.5),
    },
  },
  logo: {
    background: colors.red,
    padding: base(0.75),
  },
  icon: {
    width: base(1.5),
    height: base(1.5),
    display: "block",
  },
  menu: {
    background: colors.gray,
    position: "relative",
    padding: `${headerHeight} 0 0`,
    border: 0,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    [queries.m]: {
      padding: `${headerHeight} ${base(1.5)} 0`,
    },
  },
  primaryNavItem: {
    color: colors.antique,
    textDecoration: "none",
    "&:hover": {
      transition: `all ${transitions.linear}`,
      color: colors.blue,
    },
  },
  secondaryNavItem: {
    fontSize: base(1.5),
    color: "white",
    textDecoration: "none",
    "&:hover": {
      transition: `all ${transitions.linear}`,
      color: colors.blue,
    },
  },
  navLinks: {
    [queries.m]: {
      position: "relative",
      zIndex: 1,
      marginBottom: base(12),
      pointerEvents: "none",
      "& a": {
        pointerEvents: "all",
      },
    },
  },
  secondaryNav: {
    display: "flex",
    flexDirection: "column",
    height: "50%",
    justifyContent: "space-evenly",
  },
  menuButton: ({ menuActive }) => ({
    pointerEvents: "all",
    background: colors.gray,
    transition: "all 200ms linear",
    width: base(3),
    height: base(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
    border: 0,
    boxShadow: `inset 0 0 0 ${strokeWidth} ${
      menuActive ? colors.antique : colors.gray
    }`,
    cursor: "pointer",
    "&:focus": {
      outline: "none",
      background: color(colors.gray).lighten(0.8).hex(),
    },
    "&:active": {
      outline: "none",
      background: color(colors.gray).lighten(1.2).hex(),
    },
  }),
  menuActive: {},
  ctaWrap: {
    position: "fixed",
    right: base(-5),
    bottom: base(-8),
    [queries.m]: {
      display: "block",
      right: base(-3),
      bottom: base(-6),
    },
    [queries.s]: {
      right: base(-2),
      bottom: base(-2),
      marginBottom: base(-3),
    },
  },
  ctaCSS: {
    width: `${base(35)} !important`,
    height: `${base(35)} !important`,
    [queries.l]: {
      width: `${base(30)} !important`,
      height: `${base(30)} !important`,
    },
    [queries.m]: {
      width: `${base(22)} !important`,
      height: `${base(22)} !important`,
    },
  },
});
