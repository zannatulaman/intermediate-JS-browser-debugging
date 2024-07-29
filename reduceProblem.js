const names = ["Rahim", "Sabbir", "Abdur"]

const getNames = names.reduce((accumulator, current) => {
    accumulator[current] = current.length
    return accumulator
}, {})

console.log(getNames);

const array = [2, 3, 4, 5, 6]

const total = array.reduce((accumulator, current) => {
       return accumulator + current
}, 20)

console.log('Total', total);