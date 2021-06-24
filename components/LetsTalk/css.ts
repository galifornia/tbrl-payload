import { createUseStyles } from "react-jss";
import { base } from "../../css/base";
import transitions from "../../css/transitions";
import colors from "../../css/colors";

export default createUseStyles({
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(359deg)",
    },
  },
  wrap: {
    position: "relative",
    width: base(25),
    height: base(25),
    overflow: "hidden",
  },
  graphic: ({ isHovered }) => ({
    position: "absolute",
    zIndex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    animationName: "$spin",
    animationDuration: "20s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    opacity: isHovered ? 1 : 0.125,
    transition: `opacity ${transitions.defaultMS}`,
  }),
  path: {
    fill: colors.antique,
  },
  link: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 2,
    color: colors.antique,
    textDecoration: "none",
  },
  arrow: ({ isHovered }) => ({
    transform: isHovered
      ? "rotate(-45deg) translate3d(25%, 0, 0)"
      : "rotate(-45deg)",
    opacity: isHovered ? 1 : 0.125,
    transition: `all ${transitions.defaultMS}`,
  }),
  heading: {
    marginBottom: base(3),
  },
});
