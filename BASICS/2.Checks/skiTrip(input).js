function skiTrip(input) {
    let days = Number(input[0]);
    let typeRoom = input[1];
    let rate = input[2];

    let price = 0;
    let nights = days - 1;

    if (nights < 10) {
        switch (typeRoom) {
            case `room for one person`:
                price = (days - 1) * 18;
                break;
            case `apartment`:
                price = (days - 1) * 25 * 0.70;
                break;
            case `president apartment`:
                price = (days - 1) * 35 * 0.90;
                break;
            default: ; break;
        }
    } else if (nights >= 10 && nights <= 15) {
        switch (typeRoom) {
            case `room for one person`:
                price = (days - 1) * 18;
                break;
            case `apartment`:
                price = (days - 1) * 25 * 0.65;
                break;
            case `president apartment`:
                price = (days - 1) * 35 * 0.85;
                break;
            default: ; break;
        }
    } else {
        switch (typeRoom) {
            case `room for one person`:
                price = (days - 1) * 18;
                break;
            case `apartment`:
                price = (days - 1) * 25 * 0.50;
                break;
            case `president apartment`:
                price = (days - 1) * 35 * 0.80;
                break;
            default: ; break;
        }
    }
    if (rate === `positive`) {
        price = (price * 1.25).toFixed(2);
    } else {
        price = (price * 0.90).toFixed(2);
    }
    console.log(price);
}
skiTrip(["30",
"president apartment",
"negative"])
