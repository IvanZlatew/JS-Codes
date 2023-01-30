function vacation(input) {
    let index = 0;
    let excursion = Number(input[index]);
    index++;
    let budget = Number(input[index]);
    index++;
    let n = 0;
    let n2 = 0;

    while (budget < excursion) {
        let type = input[index];
        index++;
        let sum = Number(input[index]);
        index++;
        n2++;
        switch (type) {
            case `spend`:
                n++;
                budget -= sum;
                if (budget < 0) {
                    budget = 0;
                };
                break;
            case `save`:
                n = 0;
                budget += sum;
                break;
        }
        if (n === 5) {
            console.log(`You can't save the money.`);
            console.log(n2);
            break;
        }
    }
    if (budget >= excursion) {
        console.log(`You saved the money for ${n2} days.`);
    }
}
vacation(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"])

