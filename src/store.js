export const store = {
    state: {
      numbers: [1, 2, 3, 5, 7,8],
    },
    addNumber(newNumber) {
      this.state.numbers.push(parseInt(newNumber))
    },
  }