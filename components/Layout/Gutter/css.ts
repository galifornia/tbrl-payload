import { createUseStyles } from "react-jss";
import { base } from "../../../css/base";
import colors from "../../../css/colors";
import { strokeWidth, headerHeight } from "../../../css/sizes";
import color from "color";
import zIndex from "../../../css/zIndex";
import queries from "../../../css/queries";
import transitions from "../../../css/transitions";
import { gutter } from "../../../css/structure";

export default createUseStyles({
  left: { paddingLeft: gutter },
  right: { paddingRight: gutter },
});
