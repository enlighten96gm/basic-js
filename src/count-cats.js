module.exports = function countCats(matrix) {
  let arr = []
  for (let i = 0; i < matrix.length; i++) {
      let newArr = matrix[i]
      for (let j = 0; j < newArr.length; j++) {
          arr.push(newArr[j])
      }
  }
  let newNumber = arr.filter(item => item == '^^').length
  return newNumber
};
