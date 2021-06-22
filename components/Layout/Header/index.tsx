import React from "react";
import PropTypes from "prop-types";
import useStyles from "./css";
import { useModal, Modal } from "@faceless-ui/modal";
import { Grid, Cell } from "@faceless-ui/css-grid";
import Icon from "../../graphics/Icon";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { Props } from "./types";
import GridContainer from "../GridContainer";
import CMSLink from "../../CMSLink";

type linkType = {
  label: string;
  url: string;
};

const menuSlug = "menu";
const Header: React.FC<Props> = ({ megaMenu, socialMedia }) => {
  const { currentModal, toggle } = useModal();
  const menuActive = currentModal === menuSlug;
  const styles = useStyles({ menuActive });

  return (
    <header className={styles.header}>
      <Link href="/">
        <a href="/" className={styles.logo}>
          <Icon className={styles.icon} />
        </a>
      </Link>
      <button
        type="button"
        className={styles.menuButton}
        onClick={() => toggle(menuSlug)}
      >
        <Hamburger active={menuActive} />
      </button>
      <Modal slug={menuSlug} className={styles.menu}>
        <GridContainer>
          <Grid>
            <Cell cols={8} htmlElement="nav">
              {megaMenu?.nav?.map(({ link }: any, i) => (
                <CMSLink key={i} {...link}>
                  <h3 key={i}>{link.label}</h3>
                </CMSLink>
                //
              ))}
            </Cell>
            <Cell cols={3}>
              {socialMedia?.socials?.map(({ link }, i) => (
                <a
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryNavItem}
                  href={link?.url}
                >
                  {link.label}
                </a>
              ))}
            </Cell>
          </Grid>
        </GridContainer>
      </Modal>
    </header>
  );
};

Header.propTypes = {};

export default Header;
