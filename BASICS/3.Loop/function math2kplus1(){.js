function math2kplus1(input) {
    let n = Number(input[0]);
    let a = 1;
    while (a <= n) {
        console.log(a);
        a = 2 * a + 1;
    }
}
math2kplus1([`17`])