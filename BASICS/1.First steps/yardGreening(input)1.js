function yardGreening(input) {
    let finPrice = input[0] * 7.61 - input[0] * 7.61 * 0.18;
    let discount = input[0] * 7.61 * 0.18;
    console.log(`The final price is: ${finPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(['550']);