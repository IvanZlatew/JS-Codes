function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;
    let name = ``;
    let name2 = ``;
    let name2In = 0;
    let goal = 0;

    while (command !== `END`) {
        name = command;
        let currentGoal = Number(input[index]);
        index++;
        if (currentGoal < 3 && goal >= currentGoal) {
            goal = goal;
            name = command;
        } else if (currentGoal < 3 && goal < currentGoal) {
            name2 = command;
            name2In++;
            goal = currentGoal;
        } else if (currentGoal >= 3 && currentGoal < 10 && goal >= currentGoal) {
            goal = goal;
            name = command;
        } else if (currentGoal >= 3 && currentGoal < 10 && goal < currentGoal) {
            name2 = command;
            name2In++;
            goal = currentGoal;
        } else if (currentGoal >= 10 && goal >= currentGoal) {
            goal = goal;
            name = command;
            break;
        }else if(currentGoal >= 10 && goal < currentGoal){
            name2 = command;
            name2In++;
            goal = currentGoal;
            break;
        }
        command = input[index];
        index++;
    }
    if (goal < 3 && name2In > 0) {
        console.log(`${name2} is the best player!`);
        console.log(`He has scored ${goal} goals.`);
    } else if (goal < 3 && name2In === 0) {
        console.log(`${name} is the best player!`);
        console.log(`He has scored ${goal} goals.`);
    } else if (goal >= 3 && name2In > 0) {
        console.log(`${name2} is the best player!`);
        console.log(`He has scored ${goal} goals and made a hat-trick !!!`);
    } else if (goal >= 3 && name2In === 0) {
        console.log(`${name} is the best player!`);
        console.log(`He has scored ${goal} goals and made a hat-trick !!!`);
    }
}
bestPlayer([`Zidane`, `1`, `Felipe`, `10`, `Johnson`, `10`, `END`])