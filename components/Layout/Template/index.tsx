import React from "react";
import PropTypes from "prop-types";
import Footer from "../Footer/index";
import { Type as FooterType } from "../../../globals/Footer";
import { Type as SocialMediaType } from "../../../globals/SocialMedia";

type Props = {
  footer: FooterType;
  socialMedia: SocialMediaType;
};

const Template: React.FC<Props> = ({ children, footer, socialMedia }) => {
  return (
    <>
      {children}
      <Footer footer={footer} socialMedia={socialMedia} />
    </>
  );
};

Template.propTypes = {};

export default Template;
