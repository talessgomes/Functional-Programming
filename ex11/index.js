function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    console.log(anim);
    const newArray = anim.slice(beginSlice, endSlice);

    return newArray;
    // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
let functionTeste = sliceArray(inputAnim, 1, 3);

console.log(functionTeste);['Dog', 'Tiger'];




/*
      EXEMPLO
 
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
 
console.log(newArray); //["Dog", "Tiger"]
 */