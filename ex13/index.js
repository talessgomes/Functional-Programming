function nonMutatingConcat(original, attach) {
    // Only change code below this line
    const concatArray = original.concat(attach);
  
    return concatArray;
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  const resultFunction = nonMutatingConcat(first, second);
  console.log(resultFunction); // [ 1, 2, 3, 4, 5 ]
  
  //[1, 2, 3].concat([4, 5, 6]);