const person = {
    firstName : "Aayan",
    lastName : "Mujnebin", 
    age : 7
}

// console.log(person.firstName);

// const keys = person['firstName'];
// console.log(keys);

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

// for(let key of keys){
//     // console.log(key);
//      const value = person[key]
//      console.log(`${key}, ${value}`);
// }

for (let key in values ){
    console.log(key);
}