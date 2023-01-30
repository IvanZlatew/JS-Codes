function balance(input) {
    let sum = 0;
    let index = 0;
    let n = input[index];

    while (n !== `NoMoreMoney`) {
        let newN = Number(input[index]);
        if (newN < 0) {
            console.log(`Invalid operation!`);
            break;
        } else {
            sum += newN;
            console.log(`Increase: ${newN.toFixed(2)}`);
            index++;
            n = input[index];
        }
    }
    console.log(`Total: ${sum.toFixed(2)}`)
}
balance([`120`, `45.55`, `-150`])