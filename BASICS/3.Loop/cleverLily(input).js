function cleverLily(input) {
    let age = Number(input[0]);
    let woshingMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let currentMoney = 10;
    let toy = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += currentMoney;
            currentMoney += 10;
            money -= 1;
        } else {
            toy++;
        }
    }
    let totalMoney = money + toy * toyPrice;
    let diff = Math.abs(totalMoney - woshingMashinePrice).toFixed(2);
    if (totalMoney >= woshingMashinePrice) {
        console.log(`Yes! ${diff}`);
    } else {
        console.log(`No! ${diff}`);
    }
}
cleverLily([`10`, `170`, `6`])