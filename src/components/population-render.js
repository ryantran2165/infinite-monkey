import React from "react";
import PropTypes from "prop-types";

const COL_THRESHOLD = 25;

const PopulationRender = ({ populationArr }) => {
  const numCols = Math.ceil(populationArr.length / COL_THRESHOLD);
  const perCol = Math.trunc(populationArr.length / numCols);
  let remainder = populationArr.length % numCols;

  const pops = [];
  for (let i = 0; i < numCols; i++) {
    pops.push(populationArr.slice(i * perCol, i * perCol + perCol));
  }

  for (let i = 0; i < remainder; i++) {
    pops[pops.length - 1 - i].push(populationArr[populationArr.length - 1 - i]);
  }

  return pops.map((pop, i) => {
    return (
      <div className="col col-auto" key={i}>
        {pop.map((word, j) => {
          return (
            <div className="row" key={String(i + j)}>
              <div className="col">
                <h5>{word}</h5>
              </div>
            </div>
          );
        })}
      </div>
    );
  });
};

PopulationRender.defaultProps = {
  populationArr: [],
};

PopulationRender.propTypes = {
  populationArr: PropTypes.array,
};

export default PopulationRender;
