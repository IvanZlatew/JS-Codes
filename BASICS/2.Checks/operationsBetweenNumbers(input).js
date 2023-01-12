function operationsBetweenNumbers(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let math = input[2];

    let res1 = 0;

    if (math === `+`) {
        res1 = n1 + n2;
        if (res1 % 2 === 0) {
            console.log(`${n1} ${math} ${n2} = ${res1} - even`);
        } else {
            console.log(`${n1} ${math} ${n2} = ${res1} - odd`);
        }
    } else if (math === `-`) {
        res1 = n1 - n2;
        if (res1 % 2 === 0) {
            console.log(`${n1} ${math} ${n2} = ${res1} - even`);
        } else {
            console.log(`${n1} ${math} ${n2} = ${res1} - odd`);
        }
    } else if (math === `*`) {
        res1 = n1 * n2;
        if (res1 % 2 === 0) {
            console.log(`${n1} ${math} ${n2} = ${res1} - even`);
        } else {
            console.log(`${n1} ${math} ${n2} = ${res1} - odd`);
        }
    } else if (math === `/`) {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            res1 = n1 / n2;
            console.log(`${n1} ${math} ${n2} = ${res1.toFixed(2)}`);
        }
    } else {
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            res1 = n1 % n2;
            console.log(`${n1} ${math} ${n2} = ${Math.trunc(res1)}`);
        }
    }

}
operationsBetweenNumbers([`10`, `3`, `%`])