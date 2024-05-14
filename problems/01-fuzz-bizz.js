/******************************************************************************
Define a function called fuzzBizz that accepts a number parameter. The function
should return an array of numbers from 0 to that number. Each number in the
array should be either divisible by 2 or 7, BUT NOT BOTH.
*******************************************************************************/

function fuzzBizz(num){
    let arr = [];
    
    for (let i = 0; i < num; i++) {
        let divTwo = i % 2 === 0;
        let divSeven = i % 7 === 0;
        let divBoth = divTwo && divSeven;

        if((divTwo || divSeven) && !divBoth) {
            arr.push(i);
        }
    }

    return arr;
} 

console.log(fuzzBizz(17)); //=> [ 2, 4, 6, 7, 8, 10, 12, 16 ]
console.log(fuzzBizz(30)); //=> [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = fuzzBizz;
