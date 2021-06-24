import React, { useEffect } from "react";
import { useStyles } from "../css/app";
import Header from "../components/Layout/Header";
import zIndex from "../css/zIndex";
import { Modal, ModalContainer, ModalProvider } from "@faceless-ui/modal";
import { GridProvider } from "@faceless-ui/css-grid";
import { WindowInfo, WindowInfoProvider } from "@faceless-ui/window-info";
import gridConfig from "../css/grid";
import breakpoints from "../css/breakpoints";
import App from "next/app";
import { Type as MegaMenuType } from "../globals/MegaMenu";
import { Type as FooterType } from "../globals/Footer";
import { Type as SocialMediaType } from "../globals/SocialMedia";

type AppProps = {
  pageProps: unknown;
  Component: React.FC<{ footer: FooterType; socialMedia: SocialMediaType }>;
} & {
  megaMenu: MegaMenuType;
  footer: FooterType;
  socialMedia: SocialMediaType;
};
const MyApp = (appProps: AppProps): React.ReactElement => {
  const classes = useStyles();
  const { Component, pageProps, megaMenu, footer, socialMedia } = appProps;

  useEffect(() => {
    const style = document.getElementById("server-side-styles");

    if (style) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <WindowInfoProvider breakpoints={breakpoints}>
      <ModalProvider
        zIndex={zIndex.modal}
        classPrefix="payload"
        transTime={400}
      >
        <WindowInfo>
          {(windowInfo) => (
            <GridProvider
              cols={gridConfig.cols}
              colGap={gridConfig.colGap}
              rowGap={gridConfig.rowGap}
              windowInfo={windowInfo}
            >
              <div className={classes.app}>
                <Header megaMenu={megaMenu} socialMedia={socialMedia} />
                <Component
                  {...pageProps}
                  footer={footer}
                  socialMedia={socialMedia}
                />
              </div>
            </GridProvider>
          )}
        </WindowInfo>
        <ModalContainer />
      </ModalProvider>
    </WindowInfoProvider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const username = process.env.USR;
  const password = process.env.PSS;

  const res = await fetch("http://localhost:3000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  });

  const json = await res.json();
  const { token } = json;

  const [megaMenu, footer, socialMedia] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/mega-menu`, {
      headers: {
        cookie: `payload-token=${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/footer`, {
      headers: {
        cookie: `payload-token=${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()),
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/social-media`, {
      headers: {
        cookie: `payload-token=${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()),
  ]);

  return {
    ...appProps,
    megaMenu,
    footer,
    socialMedia,
  };
};

export default MyApp;
