import React from "react";
import PropTypes from "prop-types";

const StartButton = ({ onStart }) => {
  return (
    <input
      className="btn btn-primary btn-lg"
      type="button"
      value="Start"
      onClick={onStart}
    />
  );
};

StartButton.propTypes = {
  onStart: PropTypes.func.isRequired
};

export default StartButton;
