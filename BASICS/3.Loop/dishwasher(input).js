function dishwasher(input) {
    let index = 0;
    let detergent = Number(input[index]) * 750;
    index++;
    let n = 0;
    let dishes = 0;
    let dishesC = 0;
    let pots = 0;
    let potsC = 0;

    while (detergent >= 0) {
        n++;
        let type = input[index];
        if (type === `End`) {
            console.log(`Detergent was enough!`);
            console.log(`${dishesC} dishes and ${potsC} pots were washed.`);
            console.log(`Leftover detergent ${detergent} ml.`);
            index++;
            break;
        } else {
            if (n % 3 !== 0) {
                dishesC += Number(type);
                dishes = Number(type);
                detergent -= dishes * 5;
            } else {
                potsC += Number(type);
                pots = Number(type);
                detergent -= pots * 15;
            }
        }
        index++;
    } if (detergent < 0) {
        console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
    }
}
dishwasher([1,10,15,10,12,13,30])