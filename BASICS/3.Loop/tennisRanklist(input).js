function tennisRanklist(input) {
    let index = 0;
    let tours = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let toursPoints = 0;
    let winnerPoints = 0;
    let totalPoints = 0;

    for (i = 1; i <= tours; i++) {
        let position = input[index];
        index++;
        switch (position) {
            case `W`: toursPoints += 2000; break;
            case `F`: toursPoints += 1200; break;
            case `SF`: toursPoints += 720; break;
        }
        if (position === `W`) {
            winnerPoints++;
        }
    }
    totalPoints = startPoints + toursPoints;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(toursPoints / tours)}`);
    console.log(`${(winnerPoints / tours * 100).toFixed(2)}%`);
}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])
