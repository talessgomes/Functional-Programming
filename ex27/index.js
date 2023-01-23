function addTogether() {
    const [first, second] = arguments;

    if (typeof (first) !== "number") {
        return undefined;
    }

    // first está definido como um number
    // e o second ainda não está definido

    else if (arguments.length === 1) {
        function addSecond(second) {
            if (typeof (second) !== "number") {
                return undefined;
            } else {
                return first + second;
            }
        }
        return addSecond;
        // Novo argumento é um number
    }
    // agora vou verificar se o second é um number
    else if (typeof (second) !== "number") {
        return undefined;
    } else {
        return first + second;
    }
}

console.log(addTogether(2, 3)); // 5