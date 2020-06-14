import React from "react";
import PropTypes from "prop-types";
import TextInput from "./text-input";
import RangeInput from "./range-input";
import Label from "./label";

const Inputs = ({ onChange, targetPhrase, populationSize, mutationRate }) => {
  return (
    <div className="row justify-content-center pt-3 pb-3">
      <div className="col col-12 col-sm-6 col-lg-3 align-self-center">
        <TextInput
          placeholder="Enter target phrase"
          id="targetPhrase"
          onChange={onChange}
        />
        <Label text="Target phrase" value={targetPhrase} />
      </div>
      <div className="col col-12 col-sm-6 col-lg-3 align-self-center">
        <RangeInput
          min={10}
          max={1000}
          step={10}
          defaultValue={populationSize}
          id="populationSize"
          onChange={onChange}
        />
        <Label text="Population size" value={populationSize} />
      </div>
      <div className="col col-12 col-sm-6 col-lg-3 align-self-center">
        <RangeInput
          min={0}
          max={100}
          step={1}
          defaultValue={mutationRate}
          id="mutationRate"
          onChange={onChange}
        />
        <Label text="Mutation rate" value={mutationRate + "%"} />
      </div>
    </div>
  );
};

Inputs.defaultProps = {
  targetPhrase: "",
  populationSize: 0,
  mutationRate: 0,
};

Inputs.propTypes = {
  onChange: PropTypes.func.isRequired,
  targetPhrase: PropTypes.string,
  populationSize: PropTypes.number,
  mutationRate: PropTypes.number,
};

export default Inputs;
