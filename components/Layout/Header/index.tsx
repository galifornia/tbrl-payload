import React from "react";
import PropTypes from "prop-types";
import useStyles from "./css";

const Header: React.FC = (props) => {
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <div>Logo</div>
      <div>Menu</div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
