function oscars(input) {
    let actor = input[0];
    let startPoints = Number(input[1]);
    let index = 2;
    let appraiser = Number(input[index]);
    index++;
    let currentPoints = 0;
    let totalPoints = 0;
    let finalPoints = 0;
    let isHaveNomination = false;


    for (let i = 1; i <= appraiser; i = i + 1) {
        let currentAppraiser = input[index];
        index = index + 2;
        let currentPoints = input[index - 1];

        totalPoints += (Number(currentAppraiser.length) * Number(currentPoints)) / 2;
        finalPoints = startPoints + totalPoints;

        if (finalPoints > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${finalPoints.toFixed(1)}!`);
            isHaveNomination = true;
            break;
        }
    }
    if (!isHaveNomination) {
        let diff = 1250.5 - finalPoints;
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])
