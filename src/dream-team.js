module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false
  } else {
  let string = ''
  smtNew = []
  for (let j = 0; j < members.length; j++) {
      if (typeof members[j] == 'string') {
          smtNew.push(members[j])
      }
  }
  console.log(smtNew)
  let arr3 = []
  for (let i = 0; i < smtNew.length; i++) {
      let arr1 = smtNew[i].trim()
      arr3.push(arr1)
  }
  
  let arr = arr3.map(element => {
      if (typeof element == 'string') {
          return element[0]
      }
      
  });
  let arrOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 for (let i = 0; i < arr.length; i++) {
     if (typeof arr[i] == 'string') {
      string += arr[i]
      
     }      
 }
 let newStr = string.toUpperCase()

 let newString = newStr.split('').filter(item => {
     return ~arrOfLetters.indexOf(item)
 })

 return newString.sort().join('')
}
};
