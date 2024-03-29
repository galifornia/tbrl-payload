import { createUseStyles } from "react-jss";
import { htmlFontSize, baselinePX, base } from "./base";
import { h1, h2, h3, h4, h5, body } from "./type";
import colors from "./colors";
import queries from "./queries";
import transitions from "./transitions";

export const useStyles = createUseStyles({
  "@global": {
    "html body": {
      margin: 0,
      color: colors.gray,
    },
    "*": {
      boxSizing: "border-box",
    },
    html: {
      backgroundColor: colors.antique,
      fontFamily: "system-ui, Heveltica Neue, Helvetica, Arial, sans-serif",
      fontSize: htmlFontSize,
      lineHeight: `${baselinePX}px`,
      [queries.m]: {
        fontSize: htmlFontSize * 0.75,
      },
    },
    h1,
    h2,
    h3,
    h4,
    h5,
    p: {
      ...body,
    },
    ol: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 0 ${base()}`,
    },
    ul: {
      padding: `0 0 0 ${base()}`,
      margin: `0 0 0 ${base()}`,
    },
    li: {
      ...body,
    },
    ".payload__modal-item": {
      opacity: 0,
      transition: `opacity ${transitions.modal}ms linear`,
    },
    ".payload__modal-item--enterActive": {
      opacity: 1,
    },
    ".payload__modal-item--enterDone": {
      opacity: 1,
    },
  },
  app: {
    height: "100%",
  },
});
