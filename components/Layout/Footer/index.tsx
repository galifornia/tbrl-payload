import React from "react";
import PropTypes from "prop-types";
import useStyles from "./css";
const Footer = (props) => {
  const styles = useStyles();
  return <footer className={styles.footer}>Footer</footer>;
};

Footer.propTypes = {};

export default Footer;
