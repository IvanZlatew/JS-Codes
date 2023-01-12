function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    if (day === `Monday` || day === `Tuesday` || day === `Wednesday` || day === `Thursday` || day === `Friday`) {
        switch (fruit) {
            case `banana`: price = (quantity * 2.50).toFixed(2); console.log(price); break;
            case `apple`: price = (quantity * 1.20).toFixed(2); console.log(price); break;
            case `orange`: price = (quantity * 0.85).toFixed(2); console.log(price); break;
            case `grapefruit`: price = (quantity * 1.45).toFixed(2); console.log(price); break;
            case `kiwi`: price = (quantity * 2.70).toFixed(2); console.log(price); break;
            case `pineapple`: price = (quantity * 5.50).toFixed(2); console.log(price); break;
            case `grapes`: price = (quantity * 3.85).toFixed(2); console.log(price); break;
            default : console.log(`error`);
        }
    } else if (day === `Saturday` || day === `Sunday`) {
        switch (fruit) {
            case `banana`: price = (quantity * 2.70).toFixed(2); console.log(price); break;
            case `apple`: price = (quantity * 1.25).toFixed(2); console.log(price); break;
            case `orange`: price = (quantity * 0.90).toFixed(2); console.log(price); break;
            case `grapefruit`: price = (quantity * 1.60).toFixed(2); console.log(price); break;
            case `kiwi`: price = (quantity * 3.00).toFixed(2); console.log(price); break;
            case `pineapple`: price = (quantity * 5.60).toFixed(2); console.log(price); break;
            case `grapes`: price = (quantity * 4.20).toFixed(2); console.log(price); break;
            default : console.log(`error`);
        }
    } else {
        console.log(`error`)
    }
}
fruitShop([`tomato`, `Sunday`, `2`])