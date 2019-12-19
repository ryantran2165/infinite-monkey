import React from "react";
import PropTypes from "prop-types";

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

Title.defaultProps = {
  text: "Default Title"
};

Title.propTypes = {
  text: PropTypes.string
};

export default Title;
