import React from "react";
import PropTypes from "prop-types";
import Label from "./label";

const Statistics = ({
  generationCount,
  bestPhrase,
  bestFitness,
  averageFitness,
  currentBestFitness,
  currentWorstFitness
}) => {
  const getFitnessString = fitness => {
    return Math.round(fitness * 100) + "%";
  };

  return (
    <div>
      <Label text="Generations" value={generationCount} />
      <Label text="Best phrase" value={bestPhrase} />
      <Label text="Best fitness" value={getFitnessString(bestFitness)} />
      <Label text="Average fitness" value={getFitnessString(averageFitness)} />
      <Label
        text="Current best fitness"
        value={getFitnessString(currentBestFitness)}
      />
      <Label
        text="Current worst fitness"
        value={getFitnessString(currentWorstFitness)}
      />
    </div>
  );
};

Statistics.defaultProps = {
  generationCount: 0,
  bestPhrase: "",
  bestFitness: 0,
  averageFitness: 0,
  currentBestFitness: 0,
  currentWorstFitness: 0
};

Statistics.propTypes = {
  generationCount: PropTypes.number,
  bestPhrase: PropTypes.string,
  bestFitness: PropTypes.number,
  averageFitness: PropTypes.number,
  currentBestFitness: PropTypes.number,
  currentWorstFitness: PropTypes.number
};

export default Statistics;
