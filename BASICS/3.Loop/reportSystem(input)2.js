function reportSystem(input) {
    let index = 0;
    let expected = Number(input[index]);
    index++;
    let totalS = 0;
    let cashS = 0;
    let cashC = 0;
    let cardS = 0;
    let cardC = 0;

    while (totalS <= expected) {
        let cash = input[index];
        if (cash === `End`) {
            console.log(`Failed to collect required money for charity.`);
            break;
        } else {
            if (cash > 100) {
                console.log(`Error in transaction!`);
            } else {
                totalS += cash;
                cashS += cash;
                cashC++;
                console.log(`Product sold!`);
            }
        }
        index++;
        let card = input[index];
        if (card === `End`) {
            console.log(`Failed to collect required money for charity.`);
            break;
        } else {
            if (card < 10) {
                console.log(`Error in transaction!`);
            } else {
                totalS += card;
                cardS += card;
                cardC++;
                console.log(`Product sold!`);
            }
        }
        index++;
    }
    if (totalS > expected) {
        console.log(`Average CS: ${((cashS / cashC).toFixed(2))}`);
        console.log(`Average CS: ${((cardS / cardC).toFixed(2))}`);
    }
}
reportSystem([600, 86, 150, 98, 227, `End`])
