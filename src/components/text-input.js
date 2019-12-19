import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ placeholder, id, onChange }) => {
  return (
    <input type="text" placeholder={placeholder} id={id} onChange={onChange} />
  );
};

TextInput.defaultProps = {
  placeholder: "",
  id: ""
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
