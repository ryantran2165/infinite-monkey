class DNA {
  /**
   *Creates a DNA with the given length and random characters as genes.
   * @param {number} length How length of the genes sequences
   */
  constructor(length) {
    this.genes = [];
    this.fitness = 0;

    // Set genes to random characters
    for (let i = 0; i < length; i++) {
      this.genes[i] = this.getRandomChar();
    }
  }

  /**
   * Calculates the fitness based on how many characters match.
   * @param {string} targetPhrase The target phrase to evolve
   */
  calculateFitness(targetPhrase) {
    let numCharMatch = 0;

    // Count matching characters
    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] === targetPhrase.charAt(i)) {
        numCharMatch++;
      }
    }

    // Update the fitness, squaring for exponential fitness
    this.fitness = Math.max(
      0.01,
      Math.pow(numCharMatch / targetPhrase.length, 2)
    );
  }

  /**
   * Genetic crossover between this DNA and the other's DNA.
   * @param {DNA} other The DNA to crossover with
   */
  crossover(other) {
    let result = new DNA(this.genes.length);

    // Get a random index to split the DNA
    let splitIndex = Math.floor(Math.random(this.genes.length));

    // Create the crossover genes
    for (let i = 0; i < this.genes.length; i++) {
      result.genes[i] = i > splitIndex ? this.genes[i] : other.genes[i];
    }

    return result;
  }

  /**
   * Mutate each gene to a random character with the given mutation rate.
   * @param {number} mutationRate The mutation rate as a decimal from 0 to 1
   */
  mutate(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      if (Math.random() < mutationRate) {
        this.genes[i] = this.getRandomChar();
      }
    }
  }

  /**
   * Returns a random ASCII char from code 32 to 126.
   */
  getRandomChar() {
    let startCharCode = 32;
    let endCharCode = 126;
    let charCode =
      startCharCode + Math.random() * (endCharCode - startCharCode + 1);
    return String.fromCharCode(charCode);
  }

  /**
   * Returns this DNA's fitness.
   * @return {number} The fitness
   */
  getFitness() {
    return this.fitness;
  }

  /**
   * Return the string representation of the genes.
   * @return {string} The string representation of the genes
   */
  toString() {
    return this.genes.join("");
  }
}

export default DNA;
