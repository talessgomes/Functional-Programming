const globalArray = [5, 6, 3, 2, 9];
console.log(globalArray, " <-- Não pode mudar");

function nonMutatingSort(arr) {
    // Only change code below this line


    return [].concat(arr).sort(function (a, b) {
        return a - b;
    });

    // Only change code above this line
}

console.log(globalArray, " <-- Não pode mudar");

console.log("Lista Final: ", nonMutatingSort(globalArray));

/*Vou fazer um concat no array, depois fazer uma função
para que a ordem seja em ordem crescente */