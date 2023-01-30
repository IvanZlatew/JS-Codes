function walking(input) {
    let index = 0;
    let target = 10000;
    let command = input[index];
    index++;
    let sum = 0;

    while (command !== `Going home`) {
        let steps = Number(command);
        sum += steps;

        if (sum >= target) {
            let diff = Math.abs(sum - target);
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === `Going home`) {
        let steps = Number(input[index]);
        index++;
        sum += steps;
        let diff = Math.abs(sum - target);
        if (sum >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
        } else {
            console.log(`${diff} more steps to reach goal.`);
        }
    }
}

    walking(["1000",
        "1500",
        "2000",
        "6500"])
