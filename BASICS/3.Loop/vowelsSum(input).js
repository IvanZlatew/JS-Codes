function vowelsSum(input) {
    let n = input[0];
    let res = 0;
    for (let i = 0; i < n.length; i += 1) {
        switch (n[i]) {
            case `a`: res = res + 1; break;
            case `e`: res = res + 2; break;
            case `i`: res = res + 3; break;
            case `o`: res = res + 4; break;
            case `u`: res = res + 5; break;
            default: ; break;
        }
    }
    console.log(res);
}
vowelsSum([`bamboo`])