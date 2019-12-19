import React from "react";
import PropTypes from "prop-types";

const PopulationRender = ({ populationArr }) => {
  return populationArr.map((value, index) => (
    <h5 className="text-break" key={index}>
      {value}
    </h5>
  ));
};

PopulationRender.defaultProps = {
  populationArr: []
};

PopulationRender.propTypes = {
  populationArr: PropTypes.array
};

export default PopulationRender;
