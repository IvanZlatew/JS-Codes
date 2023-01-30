function walking(input) {
    let index = 0;
    let steps = Number(input[index]);
    let sum = 0;

    while (steps < 10000) {
        sum += steps;
        index++;
        let n = input[index];
        if (n === `Going home`) {
            index++;
            steps = Number(input[index]);
            sum += steps;
            break;
        } else {
            steps = Number(input[index]);
        }
    }
    if (sum > 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${sum - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - sum} more steps to reach goal.`);
    }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])




