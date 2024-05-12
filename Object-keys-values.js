const person = {
    firstName : "Aayan",
    lastName : "Mujnebin", 
    age : 7
}

// const keys = Object.keys(person);
// console.log(keys);

const values = Object.values(person);
console.log(values);

// for(let item of keys){
//     console.log(person[item]);
// }

for (let keys in values ){
    console.log(keys);
}