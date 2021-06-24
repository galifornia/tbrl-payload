import React, { useCallback } from "react";
import PropTypes from "prop-types";
import useStyles from "./css";
import Gutter from "../Gutter";
import { classicNameResolver } from "typescript";
import GridContainer from "../GridContainer";
import { Cell, Grid } from "@faceless-ui/css-grid";
import { Type as FooterType } from "../../../globals/Footer";
import { Type as SocialMediaType } from "../../../globals/SocialMedia";
import { Type as LinkType } from "../../../fields/link";
import CMSLink from "../../CMSLink";
import LetsTalk from "../../LetsTalk";
import Arrow from "../../graphics/Arrow";

type Props = {
  className?: string;
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Footer: React.FC<Props> = ({ className, footer, socialMedia }) => {
  const classes = useStyles();

  const backToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className={classes.footer}>
      <Gutter right className={classes.bgWrap}>
        <div className={classes.bg} />
      </Gutter>
      <GridContainer className={classes.wrap}>
        <Grid>
          {Array.isArray(footer?.nav) && footer.nav.length > 0 && (
            <Cell cols={6} colsM={8} htmlElement="ul" className={classes.nav}>
              {footer.nav.map(({ link }) => (
                <li key={link.label}>
                  <CMSLink {...link} className={classes.link}>
                    {link.label}
                  </CMSLink>
                </li>
              ))}
            </Cell>
          )}
          <Cell cols={6} colsM={8}>
            <div className={classes.section}>
              <p style={{ margin: 0 }}>
                <a
                  href="mailto:info@customwebsiteseries.com"
                  className={classes.link}
                >
                  info@customwebsiteseries.com
                </a>
              </p>
            </div>
            <div className={classes.section}>
              <p style={{ margin: 0 }}>
                <a
                  href="https://google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  123 Adress Goes Here
                  <br />
                  Gran Rapids, MI 49504
                </a>
              </p>
            </div>
            <div className={classes.section}>
              <p style={{ margin: 0 }}>
                <a
                  className={classes.link}
                  href="tel:616123456"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  616-636-3256
                </a>
              </p>
            </div>
            <ul className={classes.social}>
              {socialMedia?.socials?.map(
                ({ link }): LinkType => (
                  <li key={link.label}>
                    <a
                      className={classes.link}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>

            <p className={classes.copyright}>
              &copy;
              {new Date().getFullYear()}
              Custom Website Bla Bla
            </p>
          </Cell>
        </Grid>
        <div className={classes.ctaWrap}>
          <LetsTalk className={classes.ctaCSS} />
        </div>
      </GridContainer>
      <button type="button" onClick={backToTop} className={classes.backToTop}>
        <Arrow className={classes.backToTopArrow} />
      </button>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
