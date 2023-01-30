function trainTheTrainers(input) {
    let index = 0;
    let people = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let sumGrade = 0;
    let count = 0;

    while (command !== `Finish`) {
        let name = command;
        let tempSumGrade = 0;
        count++;
        for (let i = 0; i < people; i++) {
            let tempGrade = Number(input[index]);
            index++;
            tempSumGrade += tempGrade;
        }
        let tempAvgGrade = tempSumGrade / people;
        sumGrade += tempAvgGrade;
        console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
        command = input[index];
        index++;
    }
    let avgGrade = sumGrade / count;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
