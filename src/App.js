import React, { Component } from "react";
import Title from "./components/title";
import Description from "./components/description";
import Population from "./logic/population";
import StartButton from "./components/start-button";
import Demo from "./components/demo";
import Inputs from "./components/inputs";
import GithubCorner from "react-github-corner";

const frameRate = 60;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetPhrase: "",
      populationSize: 50,
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

  updateState = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  start = (e) => {
    e.target.blur();

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

  update = () => {
    if (this.state.isRunning) {
      if (this.population.isFinished()) {
        this.setState({
          isRunning: false,
        });
      }

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
    }
  };

  render() {
    return (
      <div className="App container text-center pt-5">
        <div className="row">
          <div className="col">
            <Title text="Infinite Monkey Genetic Algorithm" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Description
              text={
                "Demonstrates the infinite monkey theorem using genetic algorithm.\nEnter your desired phrase, adjust the evolution parameters, and watch your phrase evolve."
              }
            />
          </div>
        </div>
        <Inputs
          onChange={this.updateState}
          targetPhrase={this.state.targetPhrase}
          populationSize={Number(this.state.populationSize)}
          mutationRate={Number(this.state.mutationRate)}
        />
        <div className="row">
          <div className="col">
            <StartButton onStart={(e) => this.start(e)} />
          </div>
        </div>
        <Demo
          generationCount={this.state.generationCount}
          bestPhrase={this.state.bestPhrase}
          bestFitness={this.state.bestFitness}
          averageFitness={this.state.averageFitness}
          currentBestFitness={this.state.currentBestFitness}
          currentWorstFitness={this.state.currentWorstFitness}
          populationArr={this.state.populationArr}
        />
        <GithubCorner
          href="https://github.com/ryantran2165/infinite-monkey-genetic-algorithm"
          bannerColor="#222"
          octoColor="#7fffd4"
          target="_blank"
        />
      </div>
    );
  }
}

export default App;
