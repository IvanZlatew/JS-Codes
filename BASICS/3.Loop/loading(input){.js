function loading(input) {
    let index = 0;
    let capacity = Number(input[index]).toFixed(1);
    index++;
    let command = input[index];
    let count = 0;
    let isLoaded = true;

    while (command !== `End`) {
        let suitcase = Number(input[index]);
        count++;
        if (suitcase < capacity && count % 3 !== 0) {
            capacity -= suitcase;
        } else if (suitcase < capacity && count % 3 == 0) {
            capacity -= (suitcase * 1.1).toFixed(1);
        } else {
            isLoaded = false;
            count--;
            break;
        }
        index++;
        command = input[index];
    }
    if (isLoaded) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${count} suitcases loaded.`);
    } else {
        console.log(`No more space!`);
        console.log(`Statistic: ${count} suitcases loaded.`);
    }
}
loading([`1200.2`, `260`, `380.5`, `125.6`, `305`, `End`])