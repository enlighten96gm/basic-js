const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if (value !== undefined) {
      this.arr.push(value)
      return this
    } else {
      this.arr.push('( )')
      return this
    }

  },
  removeLink(position) {
    let real = position - 1
    if (real >= 0 && Number.isInteger(real) && real < this.arr.length - 1) {
      this.arr.splice(real, 1)
      return this
    } else {
      this.arr = []
      throw new Error()
    }

  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let result = this.arr.map(e => `( ${e} )`)
    this.arr = []
    return result.join('~~')

  }
};

module.exports = chainMaker;
