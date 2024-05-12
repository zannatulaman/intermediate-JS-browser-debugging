const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumultor, currentValue) => {
    return accumultor + currentValue

}, 0) //0 is an intial value

console.log(sum);