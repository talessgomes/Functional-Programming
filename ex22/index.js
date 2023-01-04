function checkPositive(arr) {
    // Only change code below this line

    return arr.every(function (value) {
        return value > 0;
    })

    // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));


/* EXEMPLO
 
const numbers = [1, 5, 8, 0, 10, 11];
 
numbers.every(function(currentValue) {
  return currentValue < 10;
});
console.log(numbers) // false
 
 
every vai verificar todos os dados de um array e vai retornar um boolean
 
*/