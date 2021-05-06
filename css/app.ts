import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  "@global": {
    "html body": {
      margin: 0,
    },
    html: {
      fontFamily: "system-ui, Heveltica, Arial, sans-serif",
    },
    app: {
      height: "100%",
    },
  },
});
