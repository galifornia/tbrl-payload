import React from "react";
import PropTypes from "prop-types";
import useStyles from "./css";
import { useModal } from "@faceless-ui/modal";
import Icon from "../../graphics/Icon";
import Link from "next/link";
import Hamburger from "./Hamburger";

const menuSlug = "menu";
const Header: React.FC = (props) => {
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
    </header>
  );
};

Header.propTypes = {};

export default Header;
