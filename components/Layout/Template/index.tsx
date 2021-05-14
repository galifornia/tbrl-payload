import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/index";

const Template: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

Template.propTypes = {};

export default Template;
