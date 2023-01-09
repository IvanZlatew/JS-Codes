function pipesInPool(input) {
    let volume = Number(input[0]);
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let hours = Number(input[3]);
    let volP1 = pipe1 * hours;
    let volP2 = pipe2 * hours;

    if ((volP1 + volP2) <= volume) {
        console.log(`The pool is ${((volP1 + volP2) / volume * 100).toFixed(2)}% full. Pipe 1: ${(volP1 / (volP1 + volP2) * 100).toFixed(2)}%. Pipe 2: ${(volP2 / (volP1 + volP2) * 100).toFixed(2)}%.`);
    } else {
        console.log(`For ${hours} hours the pool overflows with ${Math.abs(volP1 + volP2 - volume).toFixed(2)} liters.`);
    }
}
pipesInPool([`100`, `100`, `100`, `2.5`])