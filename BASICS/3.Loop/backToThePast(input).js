function backToThePast(input) {
    let index = 0;
    let startSum = Number(input[index]);
    index++;
    let finalYear = Number(input[index]);
    index++;
    let years = 18;

    for (i = 0; i <= (finalYear - 1800); i++) {
        let currentYear = 1800 + i;
        if (currentYear % 2 === 0) {
            startSum -= 12000;
            years++;
        } else {
            startSum -= 12000 + 50 * years++;
        }
    }
    if (startSum >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${startSum.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(Math.abs(startSum)).toFixed(2)} dollars to survive.`);
    }
}
backToThePast([`50000`, `1802`])