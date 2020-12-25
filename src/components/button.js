import React from "react";
import PropTypes from "prop-types";

const Button = ({ value, onClick }) => {
  const handleOnClick = (e) => {
    // Remove focus from button
    e.target.blur();
    onClick();
  };

  return (
    <button
      className="btn btn-primary btn-lg"
      type="button"
      onClick={handleOnClick}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
