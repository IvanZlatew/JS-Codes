function cake(input) {
    let index = 0;
    let h = Number(input[index]);
    index++;
    let w = Number(input[index]);
    index++;
    let numbers = h * w;

    while (numbers > 0) {
        let take = input[index];
        if (take === `STOP`) {
            console.log(`${numbers} pieces are left.`);
            break;
        } else {
            numbers -= take;
            index++;
        }
    }
    if (numbers < 0) {
        console.log(`No more cake left! You need ${Math.abs(numbers)} pieces more.`);
    }
}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])

