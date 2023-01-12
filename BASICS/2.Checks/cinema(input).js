function cinema(input) {
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let num = (r * c).toFixed(2);

    switch (type) {
        case `Premiere`: res = num * 12; console.log(res.toFixed(2) + ` leva`); break;
        case `Normal`: res = num * 7.50; console.log(res.toFixed(2) + ` leva`); break;
        case `Discount`: res = num * 5; console.log(res.toFixed(2) + ` leva`); break;
        default: ; break;
    }
}
cinema([`Premiere`, `10`, `12`])