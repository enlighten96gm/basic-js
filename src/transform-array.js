module.exports = function transform(arr) {

// if (!Array.isArray(arr) || arr == null) {
//     throw new Error()
// } else if (arr.length === 0) {
//     return arr
// }
// let newArr = []
// let array = [...arr]

// for( let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         newArr.push(array[i])
//     } else if (typeof array[i] === "string") {
//         newArr.push(array[i])
//     }
//     if (typeof array[i] === 'object') {
//         newArr.push(array[i])
//     }
//     if (typeof array[i] === 'boolean') {
//         newArr.push(array[i])
//     }
//     if (array[i] === '--discard-prev') {
//         newArr.splice(array[i + 1], 1)
//         newArr.pop()
//     }
//     if (array[i] === '--double-prev') {
//         newArr.pop()
//         newArr.push(array[i - 1])
//     }
//     if (array[i] === '--discard-next' && array[i + 2] !== '--double-prev') {
//         newArr.pop()
//         array.splice(array[i - 1], 1)   
//     } else  if (array[i] === '--discard-next' && array[i + 2] === '--double-prev') {
//         newArr.pop()
//         array.splice(array[i - 1], 2) 
//     }
//     if (array[i] === '--double-next') {
//         newArr.pop()
//         newArr.push(array[i + 1])
//     }
// }
// return newArr.filter(e => e !== undefined);

let array = [];
    if(Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '--discard-next') {
                i++
            } else if (arr[i] === '--discard-prev') {
                if (array.length !== 0 &&
                      arr[i - 2] !== '--discard-next') {
                    array.pop()
                }
            } else if (arr[i] === '--double-next') {
                array.push(arr[i + 1])
            } else if (arr[i] === '--double-prev') {
                if (i !== 0 && 
                arr[i - 2] !== '--discard-next') {
                    array.push(arr[i - 1]);
                }
            } else {
                array.push(arr[i])
            }
        } 
    } else {
        throw new Error('some error')
    }
    return array.filter(e => e !== undefined);
};
