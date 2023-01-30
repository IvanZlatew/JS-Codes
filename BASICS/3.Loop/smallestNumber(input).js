function smallestNumber(input) {
    let index = 0;
    let n = input[index];
    let smallest = Number(input[0]);

    while (n !== `Stop`) {
        index++;
        n = input[index];
        if (n === `Stop`) {
            break;
        } else {
            if (smallest < Number(n)) {
                n = input[index];
            } else {
                smallest = n;
            }
        }
    }
    console.log(smallest);
}
smallestNumber(["100", "99", "80", "70", "Stop"])
