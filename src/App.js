import React, { Component } from "react";
import Title from "./components/title";
import Description from "./components/description";
import Population from "./logic/population";
import StartButton from "./components/start-button";
import Demo from "./components/demo";
import Inputs from "./components/inputs";

const frameRate = 60;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetPhrase: "",
      populationSize: 500,
      mutationRate: 5,
      generationCount: 0,
      bestPhrase: "",
      bestFitness: 0,
      averageFitness: 0,
      currentBestFitness: 0,
      currentWorstFitness: 0,
      populationArr: [],
      isRunning: false
    };
  }

  updateState = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  start = () => {
    if (this.state.targetPhrase.length > 0) {
      this.population = new Population(
        this.state.targetPhrase,
        this.state.populationSize,
        this.state.mutationRate * 0.01
      );
      this.setState({
        isRunning: true
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
          isRunning: false
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
        populationArr: this.population.getPopulationArr()
      });
    }
  };

  render() {
    return (
      <div className="App container text-center pt-5">
        <Title text="Infinite Monkey Genetic Algorithm" />
        <Description
          text={
            "Demonstrates the infinite monkey theorem using genetic algorithm.\nEnter your desired phrase, adjust the evolution parameters, and watch your phrase evolve."
          }
        />
        <Inputs
          onChange={this.updateState}
          targetPhrase={this.state.targetPhrase}
          populationSize={this.state.populationSize}
          mutationRate={this.state.mutationRate}
        />
        <StartButton onStart={this.start} />
        <Demo
          generationCount={this.state.generationCount}
          bestPhrase={this.state.bestPhrase}
          bestFitness={this.state.bestFitness}
          averageFitness={this.state.averageFitness}
          currentBestFitness={this.state.currentBestFitness}
          currentWorstFitness={this.state.currentWorstFitness}
          populationArr={this.state.populationArr}
        />
      </div>
    );
  }
}

export default App;
