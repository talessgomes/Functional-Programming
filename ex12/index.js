function nonMutatingSplice(cities) {
    // Only change code below this line
    const newArray = cities.slice(0, 3);
    return newArray;

    // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
const resultOfSlice = nonMutatingSplice(inputCities);
console.log(resultOfSlice); // [ 'Chicago', 'Delhi', 'Islamabad' ]