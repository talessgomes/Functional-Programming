function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);

    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
const resultFunction = nonMutatingPush(first, second);
console.log(resultFunction); // [ 1, 2, 3, 4, 5 ]

/*
    EXEMPLO
 
    const arr = [1, 2, 3];
    arr.push(4, 5, 6); //[1, 2, 3, 4, 5, 6]
*/