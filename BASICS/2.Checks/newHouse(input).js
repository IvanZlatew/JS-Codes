function newHouse(input) {
    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;
    switch (flower) {
        case `Roses`:
            sum = quantity * 5;
            if (quantity > 80) {
                sum = sum * 0.90;
            }
            break;
        case `Dahlias`:
            sum = quantity * 3.80;
            if (quantity > 90) {
                sum = sum * 0.85;
            }
            break;
        case `Tulips`:
            sum = quantity * 2.80;
            if (quantity > 80) {
                sum = sum * 0.85;
            }
            break;
        case `Narcissus`:
            sum = quantity * 3;
            if (quantity < 120) {
                sum = sum * 1.15;
            }
            break;
        case `Gladiolus`:
            sum = quantity * 2.5;
            if (quantity < 80) {
                sum = sum * 1.2;
            }
            break;
    }
    let diff = Math.abs(sum - budget);
    if (sum > budget) {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${diff.toFixed(2)} leva left.`);
    }
}
newHouse([`Roses`, `35`, `250`]);