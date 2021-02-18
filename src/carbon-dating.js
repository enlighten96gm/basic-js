const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity !== NaN || sampleActivity !== null) {
     return false 
    }
  
  let number = Number(sampleActivity)

  if (number == NaN || number == undefined || number < 0) {
    return false
  } else {
    let age = (Math.log(MODERN_ACTIVITY/sampleActivity))/0.693/HALF_LIFE_PERIOD
    result = Math.ceil(age)
    return result
  }
};
