function examPreparation(input) {
    let index = 0;
    let allow = Number(input[index]);
    index++;
    let task = input[index];
    let sum = 0;
    let notAllow = 0;

    while (task !== `Enough` || notAllow < allow) {
        index++;
        evaluation = Number(input[index]);
        sum += evaluation;
        index++;
        task = input[index];
        if (task === `Enough`) {
            console.log(`Average score: ${((sum / ((index - 1) / 2))).toFixed(2)}`);
            console.log(`Number of problems: ${(index - 1) / 2}`);
            console.log(`Last problem: ${task = input[index - 2]}`);
            break;
        } 
        if (evaluation <= 4) {
            notAllow++;
        } 
        if (notAllow >= allow) {
            console.log(`You need a break, ${allow} poor grades.`);
            break;
        }
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])


