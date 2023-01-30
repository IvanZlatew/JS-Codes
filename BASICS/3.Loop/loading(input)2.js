function suitcasesLoad(input) {
    let vTrunk = Number(input[0]).toFixed(1);
    let counter = 0;
    let index = 1;
    let command = (input[index]);
    index++;
    let isFree = false;
    while (command !== "End") {
        let suitcase = Number(command);
        counter++;        
        if (counter % 3 === 0) {
            vTrunk -= suitcase * 1.1;
        } else {
            vTrunk -= suitcase;
        }
        let res = Math.abs(vTrunk);
        if (vTrunk < 0 && suitcase > res) {
            counter--;
            console.log(`No more space!`);
            console.log(`Statistic: ${counter} suitcases loaded.`);
            isFree = true;
            break;
        }
        command = (input[index]);
        index++;
    }
    if (!isFree) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${counter} suitcases loaded.`);
    } 
}
suitcasesLoad([`1200.2`, `260`, `380.5`, `125.6`, `305`, `End`])