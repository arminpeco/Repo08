
//Only change code below this line
function randomRangeNumber(minNumber,maxNumber) {
    return console.log(Math.floor(Math.random()*(maxNumber-minNumber+1)) + minNumber);
}
//Only change code above this line
randomRangeNumber(2,6);
module.exports=randomRangeNumber;