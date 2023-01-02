function alphabeticalOrder(arr) {
    // Only change code below this line

    return arr.sort();

    // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
  //[ 'a', 'a', 'c', 'd', 'g', 'z' ]

/* sort() já organiza a ordem automáticamente */


/*
    EXEMPLO
Ao contrário
 
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
 
reverseAlpha(['l', 'h', 'z', 'b', 's']); //['z', 's', 'l', 'h', 'b']
*/