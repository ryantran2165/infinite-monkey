import React, { Component } from "react";
import Population from "./logic/population";
import Button from "./components/button";
import PopulationRender from "./components/population-render";
import GithubCorner from "react-github-corner";

const frameRate = 60;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetPhrase: "",
      populationSize: 250,
      mutationRate: 5,
      generationCount: 0,
      bestPhrase: "",
      bestFitness: 0,
      averageFitness: 0,
      currentBestFitness: 0,
      currentWorstFitness: 0,
      populationArr: [],
      isRunning: false,
    };
  }

  handleOnChangeState = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleOnClickStart = () => {
    if (this.state.targetPhrase.length > 0) {
      this.population = new Population(
        this.state.targetPhrase,
        this.state.populationSize,
        this.state.mutationRate * 0.01
      );
      this.setState({
        isRunning: true,
      });
    }
  };

  componentDidMount() {
    this.timer = setInterval(() => this.update(), 1000 / frameRate);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /**
   * Update loop.
   */
  update = () => {
    if (!this.state.isRunning) {
      return;
    }

    // Population done, toggle isRunning
    if (this.population.isFinished()) {
      this.setState({
        isRunning: false,
      });

      return;
    }

    // Population not done, keep going
    this.population.nextGeneration();
    this.setState({
      generationCount: this.population.getGenerationCount(),
      bestPhrase: this.population.getBestPhrase(),
      bestFitness: this.population.getBestFitness(),
      averageFitness: this.population.getAverageFitness(),
      currentBestFitness: this.population.getCurrentBestFitness(),
      currentWorstFitness: this.population.getCurrentWorstFitness(),
      populationArr: this.population.getPopulationArr(),
    });
  };

  /**
   * Returns the fitness as a percentage string.
   * @param {number} fitness The fitness to convert to a string
   * @return {string} the fitness as a percentage string
   */
  getFitnessString = (fitness) => {
    return Math.round(fitness * 100) + "%";
  };

  render() {
    return (
      <div className="App container text-center py-5">
        <div className="row">
          <div className="col">
            <h1 className="font-weight-bold">Infinite Monkey</h1>
            <h5>
              Simulates the infinite monkey theorem using a genetic algorithm.
              <br />
              Enter your target phrase, adjust the evolution parameters, and
              watch your phrase evolve.
            </h5>
            <div className="row justify-content-center pt-3">
              <div className="col col-12 col-md-4 col-lg-3 pb-3">
                <input
                  type="text"
                  placeholder="Target phrase"
                  id="targetPhrase"
                  onChange={this.handleOnChangeState}
                />
              </div>
              <div className="col col-12 col-md-4 col-lg-3 pb-3">
                <input
                  type="range"
                  min={10}
                  max={500}
                  step={10}
                  defaultValue={this.state.populationSize}
                  id="populationSize"
                  onChange={this.handleOnChangeState}
                />
                <h5>Population size: {this.state.populationSize}</h5>
              </div>
              <div className="col col-12 col-md-4 col-lg-3 pb-3">
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  defaultValue={this.state.mutationRate}
                  id="mutationRate"
                  onChange={this.handleOnChangeState}
                />
                <h5>Mutation rate: {this.state.mutationRate}</h5>
              </div>
            </div>
            <div className="pt-3">
              <Button value="Start" onClick={this.handleOnClickStart} />
            </div>
            <div className="row justify-content-center pt-4">
              <div className="col col-12 col-sm-6">
                <h5>Generations: {this.state.generationCount}</h5>
                <h5>Best phrase: {this.state.bestPhrase}</h5>
                <h5>
                  Best fitness: {this.getFitnessString(this.state.bestFitness)}
                </h5>
                <h5>
                  Average fitness:{" "}
                  {this.getFitnessString(this.state.averageFitness)}
                </h5>
                <h5>
                  Current best fitness:{" "}
                  {this.getFitnessString(this.state.currentBestFitness)}
                </h5>
                <h5>
                  Current worst fitness:{" "}
                  {this.getFitnessString(this.state.currentWorstFitness)}
                </h5>
              </div>
              <div className="col col-12 col-sm-6">
                <div className="row justify-content-center">
                  <PopulationRender
                    populationArr={this.state.populationArr}
                    targetPhrase={this.state.targetPhrase}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <GithubCorner
          href="https://github.com/ryantran2165/infinite-monkey"
          bannerColor="#222"
          octoColor="#7fffd4"
          target="_blank"
        />
      </div>
    );
  }
}

export default App;
