module.exports = function repeater(str, options) {
  let string = String(str)
  let addition = String(options.addition)
  let separatorString = options.separator
  if (!separatorString) {separatorString = '+'}
  let repeatTimes = options.repeatTimes
  if (repeatTimes == undefined) {repeatTimes = 1}
  let additionRepeatTimes = options.additionRepeatTimes
  if (additionRepeatTimes == undefined) {additionRepeatTimes = 1}
  let additionSeparator = options.additionSeparator
  if (!additionSeparator) {additionSeparator = '|'}

  let nweStr = ''
  let result = ''

  if (addition) {
    let arr = []
    for (let i = 1; i <= additionRepeatTimes; i++) {
      arr.push(addition)
      arr.push(additionSeparator)
    }
    arr.pop()
    nweStr = arr.join('')
  }

  if (string) {
    let newArr = []
    for (let j = 1; j <= repeatTimes; j++) {
      newArr.push(string)
      if (nweStr !== 'undefined') {
        newArr.push(nweStr)
      }
      newArr.push(separatorString)
    }
    newArr.pop()
    result = newArr.join('')
  }

  return result
};
  