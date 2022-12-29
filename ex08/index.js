Array.prototype.myMap = function (callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((element, index, array) => {
        newArray.push(callback(element, index, array));
    })
    // Only change code above this line
    return newArray;
};