const Person = function (firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;

    this.getFullName = function () {
        return fullName;
    };
    this.getFirstName = function () {
        return fullName.split(" ")[0];
    }
    this.getLastName = function () {
        return fullName.split(" ")[1];
    }
    this.setFirstName = function (name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

    this.setLastName = function (name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };
    this.setFullName = function (name) {
        fullName = name;
    }
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName()); //Bob Ross
console.log(bob.getFirstName()); //Bob
console.log(bob.getLastName()); //Ross
