module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let Object = {
    turns: 0,
    seconds: 0
}
let minTurns = Math.pow(2, disksNumber) - 1
let a = turnsSpeed/3600
let minTime = Math.floor(minTurns/a)

Object.seconds = minTime
Object.turns = minTurns
return Object
};
