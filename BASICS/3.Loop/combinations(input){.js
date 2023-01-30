function combinations(input) {
    let target = Number(input[0]);
    let count = 0;

    for (let i = 0; i <= 25; i++) {
        for (let j = 0; j <= 25; j++) {
            for (let k = 0; k <= 25; k++) {
                if (i + j + k === target) {
                    count++;
                }
            }
        }
    }
    console.log(count); 
}
combinations([`5`]);