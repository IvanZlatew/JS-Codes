function oscars(input) {
    let index = 0;
    let nameActor = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;
    let isNiminee = false;
    
    
    for (let i = 0; i < juryCount; i++) {
        let name = input[index];
        index++;
        let tempPoints = Number(input[index]);
        
        points += name.length * tempPoints / 2;
        if (points > 1250.5) {
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
            isNiminee = true;
            break;
        }
    }
    if (!isNiminee) {
        let diff = 1250.5 - points;
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
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
