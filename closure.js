function outerFunction() {
    const outerVariable = "Outer Variable";


    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction
}

const closureFunction = outerFunction();
closureFunction();
