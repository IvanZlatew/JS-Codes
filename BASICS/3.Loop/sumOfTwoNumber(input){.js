function sumOfTwoNumber(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let find = Number(input[2]);
    let count = 0;
    let isFound = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            if (i + j === find) {
                console.log(`Combination N:${count} (${i} + ${j} = ${find})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${count} combinations - neither equals ${find}`);
    }
}
sumOfTwoNumber([`1`, `10`, `5`])