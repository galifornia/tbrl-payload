import { createUseStyles } from "react-jss";
import { base } from "../../../css/base";
import colors from "../../../css/colors";
import { strokeWidth } from "../../../css/sizes";
import color from "color";

export default createUseStyles({
  header: {
    padding: base(2),
    display: "flex",
    justifyContent: "space-between",
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
});
