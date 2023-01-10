function toyShop(input){
let tour = Number(input[0]);
let puzzle = Number(input[1]);
let doll = Number(input[2]);
let bear = Number(input[3]);
let minon = Number(input[4]);
let truck = Number(input[5]);
let count = puzzle + doll + bear + minon + truck;
if(count >= 50){
    let sum = puzzle * 2.6 + doll * 3 + bear * 4.10 + minon * 8.20 + truck * 2;
    let bonus = sum * 0.25;
    let rent = (sum - bonus) * 0.10;
    let netSum = sum - bonus - rent;
    let restMoney = (netSum - tour).toFixed(2);
    if (netSum >= tour){
        console.log(`Yes! ${restMoney} lv left.`);
    } else {
        let restMoney = (tour - netSum).toFixed(2);
        console.log (`Not enough money! ${restMoney} lv needed.`)
    }
}
if(count < 50){
    let sum = puzzle * 2.6 + doll * 3 + bear * 4.10 + minon * 8.20 + truck * 2;
    let rent = sum * 0.10;
    let netSum = sum - rent;
    let restMoney = (netSum - tour).toFixed(2);
    if (netSum >= tour){
        console.log(`Yes! ${restMoney} lv left.`);
    } else {
        let restMoney = (tour - netSum).toFixed(2);
        console.log (`Not enough money! ${restMoney} lv needed.`)
    }
}
}
toyShop(['124',"2","2","3","5","1"])