function checkPositive(arr) {
    // Only change code below this line
    return arr.some(function (value) {
        return value > 0;
    })

    // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5])); //true

/*
exemplo
 
const numbers = [10, 50, 8, 220, 110, 11];
 
numbers.some(function(currentValue) {
  return currentValue < 10;
});
 
console.log(numbers) // true
 
some é usado para verificar se algum dado de um array vai passar na verificação,
se um deles for positivo, vai retornar true
 */