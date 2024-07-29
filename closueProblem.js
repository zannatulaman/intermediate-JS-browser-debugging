function outerCounter (){
    let count = 0

   function innerCounter () {
        return count ++
    }
    return innerCounter
}

const closure = outerCounter()
console.log(closure());
console.log(closure());
console.log(closure());

function outerVariable () {
    const myVariable = "I am from outer function"

    return function innerVariable () {
        console.log(myVariable);
    }

}
const closureVariable = outerVariable();
closureVariable();