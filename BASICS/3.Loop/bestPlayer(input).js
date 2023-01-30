function bestPlayer(input) {
    let index = 0;
    let command = input[index];
    index++;
    let name = ``;
    let goal = 0;

    while (command !== `END`) {
        name = command;
        let currentGoal = Number(input[index]);
        index++;
        if (currentGoal < 3) {
            goal = currentGoal;
            name = command;
        } else if (currentGoal >= 3 && currentGoal < 10) {
            goal = currentGoal;
            name = command;
        } else if (currentGoal >= 10) {
            goal = currentGoal;
            name = command;
            break;
        }
        command = input[index];
        index++;
    }
    if (goal < 3) {
        console.log(`${name} is the best player!`);
        console.log(`He has scored ${goal} goals.`);
    } else if (goal >= 3) {
        console.log(`${name} is the best player!`);
        console.log(`He has scored ${goal} goals and made a hat-trick !!!`);
    }
}
bestPlayer([`Zidane`, `1`, `Felipe`, `2`, `Johnson`, `4`, `END`])