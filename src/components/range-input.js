import React from "react";
import PropTypes from "prop-types";

const RangeInput = ({ min, max, step, defaultValue, id, onChange }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue}
      id={id}
      onChange={onChange}
    />
  );
};

RangeInput.defaultProps = {
  min: 0,
  max: 1,
  step: 1,
  defaultValue: 0,
  id: ""
};

RangeInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  defaultValue: PropTypes.number,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default RangeInput;
