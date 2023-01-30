function reportSystem(input) {
    let index = 0;
    let expected = Number(input[index]);
    index++;
    let type = input[index];
    let totalS = 0;
    let cash = 0;
    let cashS = 0;
    let cashC = 0;
    let card = 0;
    let cardS = 0;
    let cardC = 0;
    let isHave = true;

    while (type !== `End`) {
        cash = Number(input[index]);
        if (cash > 100) {
            console.log(`Error in transaction!`);
        } else {
            totalS += cash;
            cashS += cash;
            cashC++;
            console.log(`Product sold!`);
        }
        index++;
        card = Number(input[index]);
        if (card <= 10) {
            console.log(`Error in transaction!`);
        } else {
            totalS += card;
            cardS += card;
            cardC++;
            console.log(`Product sold!`);
        }
        index++;
        type = input[index];
        if (totalS > expected) {
            isHave = false;
            break;
        }
    }
    if (isHave) {
        console.log(`Failed to collect required money for charity.`);
    } else {
        console.log(`Average CS: ${((cashS / cashC).toFixed(2))}`);
        console.log(`Average CC: ${((cardS / cardC).toFixed(2))}`);
    }
}
reportSystem([`500`, `120`, `8`, `63`, `256`, `78`,`317`])
