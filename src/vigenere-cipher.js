class VigenereCipheringMachine {
  constructor(isDirectMachine) {
    this.isDirectMachine = isDirectMachine
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.arr = []
  }



  repeatString(key, message) {
    let resultStr = "";
    let keyLength = key.length;
    let it = 0;

    for (let i = 0; i < message.length; i++) {
      if (it % keyLength === 0) {
        it = 0;
      }
      if (this.abc.indexOf(message[i]) >= 0) {
        resultStr += key[it];
        it++;
      } else {
        resultStr += message[i];
      }
    }
    return resultStr;
  }
  genArr() {
    for (let i = 0; i < this.abc.length; i++) {
      let row = this.abc.slice(i)
      row += this.abc.slice(0, i)
      this.arr.push(row)
    }
  }

  getArr() {
    return this.arr
  }

  encrypt(message, key) {
    if (!message || !key) { throw new Error() } else {
      if (this.isDirectMachine === false) {
        let arr = message.split('')
        let revArr = arr.reverse()
        let result = revArr.join('')
        return result

      } else {
        let upSend = message.toUpperCase()
        let newKeys = key.toUpperCase()
        let encryptMessage = "";
        let upperNewKey = this.repeatString(newKeys, upSend);
        this.genArr();

        for (let it = 0; it < upSend.length;) {
          if (this.abc.indexOf(upSend[it]) >= 0) {
            let i = this.abc.indexOf(upSend[it]);
            let j = this.abc.indexOf(upperNewKey[it]);
            encryptMessage += this.arr[i][j];
            it++
          } else {
            encryptMessage += upSend[it]
            it++
          }
        }
        return encryptMessage;
      }
    }
  }
  decrypt(encryptedMess, key) {
    if (!encryptedMess || !key) { throw new Error() } else {
      if (this.isDirectMachine === false) {
        let arr = encryptedMess.split('')
        let revArr = arr.reverse()
        let result = revArr.join('')
        return result

      } else {
        let upSend = encryptedMess.toUpperCase()
        let newKeys = key.toUpperCase()
        let decryptMessage = "";
        let upperNewKey = this.repeatString(newKeys, upSend);
        this.genArr();

        for (let it = 0; it < upSend.length; it++) {
          if (this.abc.indexOf(upSend[it]) >= 0) {
            let i = this.abc.indexOf(upperNewKey[it]);
            let j = this.arr[i].indexOf(upSend[it]);
            decryptMessage += this.abc[j];
          } else {
            decryptMessage += upSend[it]
          }
        }
        return decryptMessage;
      }
    }
  }
}

module.exports = VigenereCipheringMachine;