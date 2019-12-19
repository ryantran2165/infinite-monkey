import DNA from "./dna";

class Population {
  /**
   * Creates a population with the specified parameters.
   * @param {string} targetPhrase The target phrase to evolve
   * @param {number} populationSize The population size as an integer
   * @param {number} mutationRate The mutation rate as a decimal from 0 to 1
   */
  constructor(targetPhrase, populationSize, mutationRate) {
    this.targetPhrase = targetPhrase;
    this.populationSize = populationSize;
    this.mutationRate = mutationRate;

    // Statistics
    this.generationCount = 0;
    this.bestPhrase = "";
    this.bestFitness = 0;
    this.averageFitness = 0;
    this.currentBestFitness = 0;
    this.currentWorstFitness = 0;
    this.targetFitness = 1; // Should this be const?

    // Create the population
    this.population = [];
    for (let i = 0; i < populationSize; i++) {
      this.population.push(new DNA(targetPhrase.length));
    }
  }

  /**
   * Calculates the fitness for each DNA in the population.
   */
  calculateFitness() {
    for (const dna of this.population) {
      dna.calculateFitness(this.targetPhrase);
    }
  }

  /**
   * Calculates the fitness of the current population and generates a new population through natural selection.
   */
  nextGeneration() {
    this.calculateFitness();
    this.updateStatistics();

    let newPopulation = [];

    // Choose two random from the old population, crossover, mutate, then add to new generation
    for (let i = 0; i < this.populationSize; i++) {
      let firstDNA = this.getRandomDNA();
      let secondDNA = this.getRandomDNA();

      // Crossover and mutate
      let newDNA = firstDNA.crossover(secondDNA);
      newDNA.mutate(this.mutationRate);

      // Add to new population
      newPopulation.push(newDNA);
    }

    // Set old population to new population and update statistics
    this.population = newPopulation;
  }

  /**
   * Updates the statistics.
   */
  updateStatistics() {
    this.generationCount++;
    this.averageFitness = this.getTotalFitness() / this.populationSize;

    this.currentBestFitness = 0;
    this.currentWorstFitness = 0;

    for (const dna of this.population) {
      let fitness = dna.getFitness();

      // Best fitness of all time
      if (fitness > this.bestFitness) {
        this.bestFitness = fitness;
        this.bestPhrase = dna.toString();
      }

      // Best fitness for this current generation
      if (fitness > this.currentBestFitness) {
        this.currentBestFitness = fitness;
      }

      // Worst fitness for this current generation
      if (
        this.currentWorstFitness === 0 ||
        fitness < this.currentWorstFitness
      ) {
        this.currentWorstFitness = fitness;
      }
    }
  }

  /**
   * Returns a random DNA from the population.
   * @return {DNA} The random DNA
   */
  getRandomDNA() {
    let i = 0;
    let rand = Math.random();
    let totalFitness = this.getTotalFitness();

    while (rand >= 0) {
      rand -= this.population[i].getFitness() / totalFitness;
      i++;
    }

    return this.population[i - 1];
  }

  /**
   * Returns the total fitness of all DNA's in the population.
   * @return {number} The total fitness
   */
  getTotalFitness() {
    let totalFitness = 0;

    for (const dna of this.population) {
      totalFitness += dna.getFitness();
    }

    return totalFitness;
  }

  /**
   * Evolution is finished when the best fitness equals the target fitness.
   */
  isFinished() {
    return this.bestFitness >= this.targetFitness;
  }

  /**
   * Returns the generation count.
   * @return {number} The generation count
   */
  getGenerationCount() {
    return this.generationCount;
  }

  /**
   * Returns the best phrase.
   * @return {string} The best phrase
   */
  getBestPhrase() {
    return this.bestPhrase;
  }

  /**
   * Returns the best fitness.
   * @return {number} The best fitness
   */
  getBestFitness() {
    return this.bestFitness;
  }

  /**
   * Returns the average fitness.
   * @return {number} The average fitness
   */
  getAverageFitness() {
    return this.averageFitness;
  }

  /**
   * Returns the current best fitness.
   * @return {number} The current best fitness
   */
  getCurrentBestFitness() {
    return this.currentBestFitness;
  }

  /**
   * Returns the current worst fitness.
   * @return {number} The current worst fitness
   */
  getCurrentWorstFitness() {
    return this.currentWorstFitness;
  }

  /**
   * Returns the population as an array of strings.
   * @return {Array} The population as an array of strings.
   */
  getPopulationArr() {
    return this.population.map(dna => dna.toString());
  }
}

export default Population;
