function trekkingMania(input) {
    let index = 0;
    let group = Number(input[index]);
    index++;
    let res1 = 0;
    let res2 = 0;
    let res3 = 0;
    let res4 = 0;
    let res5 = 0;
    let numberGroup = 0;


    for (i = 0; i < group; i++) {
        let n = Number(input[index]);
        index++;
        numberGroup += n;
        if (n <= 5) {
            res1 += n;
        } else if (n >= 6 && n < 13) {
            res2 += n;
        } else if (n >= 13 && n < 26) {
            res3 += n;
        } else if (n >= 26 && n < 41) {
            res4 += n;
        } else if (n >= 41) {
            res5 += n;
        }
    }
    console.log(`${(res1 / numberGroup * 100).toFixed(2)}%`);
    console.log(`${(res2 / numberGroup * 100).toFixed(2)}%`);
    console.log(`${(res3 / numberGroup * 100).toFixed(2)}%`);
    console.log(`${(res4 / numberGroup * 100).toFixed(2)}%`);
    console.log(`${(res5 / numberGroup * 100).toFixed(2)}%`);
}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
