import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { useStyles } from "../css/app";
import zIndex from "../css/zIndex";
import { Modal, ModalProvider } from "@faceless-ui/modal";
import { GridProvider, Grid, Cell } from "@faceless-ui/css-grid";
import {
  WindowInfo,
  WindowInfoProvider,
  withWindowInfo,
  useWindowInfo,
} from "@faceless-ui/window-info";
import gridConfig from "../css/grid";
import breakpoints from "../css/breakpoints";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const classes = useStyles();

  useEffect(() => {
    const style = document.getElementById("server-side-styles");

    if (style) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <WindowInfoProvider breakpoints={breakpoints}>
      <ModalProvider zIndex={zIndex.modal}>
        <WindowInfo>
          {(windowInfo) => (
            <GridProvider
              cols={gridConfig.cols}
              colGap={gridConfig.colGap}
              rowGap={gridConfig.rowGap}
              windowInfo={windowInfo}
            >
              <div className={classes.app}>
                <Component {...pageProps} />
              </div>
            </GridProvider>
          )}
        </WindowInfo>
      </ModalProvider>
    </WindowInfoProvider>
  );
};

export default MyApp;
