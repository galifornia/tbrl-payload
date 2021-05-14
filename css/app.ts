import { createUseStyles } from "react-jss";
import { htmlFontSize, baselinePX, base } from "./base";
import { h1, h2, h3, h4, h5, body } from "./type";
import colors from "./colors";
import queries from "./queries";

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
  },
  app: {
    height: "100%",
  },
});
