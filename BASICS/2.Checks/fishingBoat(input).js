function fishingBoat1(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let quantity = Number(input[2]);

    let sum = 0;
    let res = 0;

    switch (season) {
        case `Spring`:
            sum = 3000;
            if (quantity <= 6) {
                sum = sum * 0.90;
            } else if (quantity > 6 && quantity <= 11) {
                sum = sum * 0.85;
            } else {
                sum = sum * 0.75;
            } break;
        case `Summer`:
            sum = 4200;
            if (quantity <= 6) {
                sum = sum * 0.90;
            } else if (quantity > 6 && quantity <= 11) {
                sum = sum * 0.85;
            } else {
                sum = sum * 0.75;
            } break;
        case `Autumn`:
            sum = 4200;
            if (quantity <= 6) {
                sum = sum * 0.90;
            } else if (quantity > 6 && quantity <= 11) {
                sum = sum * 0.85;
            } else {
                sum = sum * 0.75;
            } break;
        case `Winter`:
            sum = 2600;
            if (quantity <= 6) {
                sum = sum * 0.90;
            } else if (quantity > 6 && quantity <= 11) {
                sum = sum * 0.85;
            } else {
                sum = sum * 0.75;
            } break;
        default: ; break;
    }
    if (quantity % 2 != 0 || season == `Autumn`) {
        res = sum;
    } else {
        res = sum * 0.95;
    }
    let diff = Math.abs(res - budget);

    if (res > budget) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    }
}
fishingBoat1([`3600`, `Autumn`, `6`])