function moving(input) {
    let index = 0;
    let h = Number(input[index]);
    index++;
    let w = Number(input[index]);
    index++;
    let d = Number(input[index]);
    index++;
    let numbers = h * w * d;

    while (numbers > 0) {
        let take = input[index];
        if (take === `Done`) {
            console.log(`${numbers} Cubic meters left.`);
            break;
        } else {
            numbers -= take;
            index++;
        }
    }
    if (numbers < 0) {
        console.log(`No more free space! You need ${Math.abs(numbers)} Cubic meters more.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

