import React from "react";
import PropTypes from "prop-types";
import Statistics from "./statistics";
import PopulationRender from "./population-render";

const Demo = ({
  generationCount,
  bestPhrase,
  bestFitness,
  averageFitness,
  currentBestFitness,
  currentWorstFitness,
  populationArr,
}) => {
  return (
    <div className="row justify-content-center pt-5 pb-5">
      <div className="col col-12 col-sm-6">
        <Statistics
          generationCount={generationCount}
          bestPhrase={bestPhrase}
          bestFitness={bestFitness}
          averageFitness={averageFitness}
          currentBestFitness={currentBestFitness}
          currentWorstFitness={currentWorstFitness}
        />
      </div>
      <div className="col col-12 col-sm-6">
        <div className="row justify-content-center">
          <PopulationRender populationArr={populationArr} />
        </div>
      </div>
    </div>
  );
};

Demo.defaultProps = {
  generationCount: 0,
  bestPhrase: "",
  bestFitness: 0,
  averageFitness: 0,
  currentBestFitness: 0,
  currentWorstFitness: 0,
  populationArr: [],
};

Demo.propTypes = {
  generationCount: PropTypes.number,
  bestPhrase: PropTypes.string,
  bestFitness: PropTypes.number,
  averageFitness: PropTypes.number,
  currentBestFitness: PropTypes.number,
  currentWorstFitness: PropTypes.number,
  populationArr: PropTypes.array,
};

export default Demo;
