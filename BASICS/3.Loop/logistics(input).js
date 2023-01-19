function logistics(input) {
    let index = 0;
    let orders = Number(input[index]);
    index++;

    let res = 0;
    let countBus = 0;
    let countTruck = 0;
    let countTrain = 0;

    for (i = 1; i <= orders; i++) {
        res += Number(input[index]);
        let weight = Number(input[index]);
        index++;

        if (weight <= 3) {
            countBus += weight;
        } else if (weight >= 4 && weight <= 11) {
            countTruck += weight;
        } else {
            countTrain += weight;
        }
    }
    console.log(((countBus * 200 + countTruck * 175 + countTrain * 120)/res).toFixed(2));
    console.log(((countBus/res) * 100).toFixed(2) + `%`);
    console.log(((countTruck/res) * 100).toFixed(2) + `%`);
    console.log(((countTrain/res) * 100).toFixed(2) + `%`);
}
logistics([`4`, `1`, `5`, `16`, `3`])