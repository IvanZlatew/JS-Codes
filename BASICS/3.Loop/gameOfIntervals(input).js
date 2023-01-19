function gameOfIntervals(input) {
    let index = 0;
    let move = Number(input[index]);
    index++;

    let res = 0;
    let interval1 = 0;
    let interval2 = 0;
    let interval3 = 0;
    let interval4 = 0;
    let interval5 = 0;
    let interval6 = 0;

    for (i = 1; i <= move; i++) {
        let num = Number(input[index]);
        index++;

        if (num >= 0 && num <= 9) {
            res = res + num * 20 / 100;
            interval1++;
        } else if (num >= 10 && num <= 19) {
            res = res + num * 30 / 100;
            interval2++;
        } else if (num >= 20 && num <= 29) {
            res = res + num * 40 / 100;
            interval3++;
        } else if (num >= 30 && num <= 39) {
            res = res + 50;
            interval4++;
        } else if (num >= 40 && num <= 50) {
            res = res + 100;
            interval5++;
        }else {
            res = (res / 2);
            interval6++;
        }
    }
console.log(res.toFixed(2));
console.log(`From 0 to 9: ${((interval1/move)*100).toFixed(2)}%`);
console.log(`From 10 to 19: ${((interval2/move)*100).toFixed(2)}%`);
console.log(`From 20 to 29: ${((interval3/move)*100).toFixed(2)}%`);
console.log(`From 30 to 39: ${((interval4/move)*100).toFixed(2)}%`);
console.log(`From 40 to 50: ${((interval5/move)*100).toFixed(2)}%`);
console.log(`Invalid numbers: ${((interval6/move)*100).toFixed(2)}%`);
}
gameOfIntervals([`10`, `43`, `57`, `-12`, `23`, `12`, `0`, `50`, `40`, `30`, `20`])