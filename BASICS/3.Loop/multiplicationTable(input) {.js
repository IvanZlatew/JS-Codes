function multiplicationTable(input) {
    let n = Number(input[0]);
    for (let i = 1; i <= 10; i += 1) {
        let res = i * n;
        console.log(`${i} * ${n} = ${res}`);
    }
}
multiplicationTable([`7`])