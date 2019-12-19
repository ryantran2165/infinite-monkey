import React from "react";
import PropTypes from "prop-types";

const Description = ({ text }) => {
  const addLineBreaks = string =>
    string.split("\n").map((text, index) => (
      <React.Fragment key={`${text}-${index}`}>
        {text}
        <br />
      </React.Fragment>
    ));

  return <h5>{addLineBreaks(text)}</h5>;
};

Description.defaultProps = {
  text: "Default description"
};

Description.propTypes = {
  text: PropTypes.string
};

export default Description;
