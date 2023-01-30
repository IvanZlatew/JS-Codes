function graduation(input) {
    let name = input[0];
    let index = 1;
    let rate = Number(input[index]);
    let lowerRate = 0;
    let sum = 0;

    while (index <= 12) {
        if (rate < 4) {
            lowerRate++;
            sum += rate;
            if (lowerRate >= 2) {
                console.log(`${name} has been excluded at ${index-1} grade`);
                break;
            } else {
                index++;
                sum += rate;
                rate = Number(input[index]);
            }
        } else {
            sum += rate;
            index++;
            rate = Number(input[index]);
        }
    }
    if (lowerRate < 2) {
        console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
