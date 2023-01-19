function histogram(input) {
    let n = Number(input[0]);
    let res1 = 0;
    let res2 = 0;
    let res3 = 0;
    let res4 = 0;
    let res5 = 0;
    for (let i = 1; i <= n; i += 1) {
        let n2 = Number(input[i]);
        if (n2 < 200) {
            res1++;
        } else if (n2 >= 200 && n2 < 400) {
            res2++;
        } else if (n2 >= 400 && n2 < 600) {
            res3++;
        } else if (n2 >= 600 && n2 < 800) {
            res4++;
        } else if (n2 >= 800) {
            res5++;
        }
    } 
    console.log(((res1 / n) * 100).toFixed(2) + `%`);
    console.log(((res2 / n) * 100).toFixed(2) + `%`);
    console.log(((res3 / n) * 100).toFixed(2) + `%`);
    console.log(((res4 / n) * 100).toFixed(2) + `%`);
    console.log(((res5 / n) * 100).toFixed(2) + `%`);    
}
histogram([`3`, `1`, `2`, `999`])