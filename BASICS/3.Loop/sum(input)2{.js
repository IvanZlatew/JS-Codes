function sum(input) {
    let startRange = Number(input[0]);
    let endRange = Number(input[1]);
    let targetNumber = Number(input[2]);
    let counter = 0;
    let isFound = false;

    for (let i = startRange; i <= endRange; i++) {
        for (let j = startRange; j <= endRange; j++) {
            counter++;
            if (i + j === targetNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${targetNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${targetNumber}`);
    }
}
sum([`1`, `10`, `5`])