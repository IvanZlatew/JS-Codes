function change(input) {
    let startF = Number(input[0]);
    let finishF = Number(input[1]);
    let startS = Number(input[2]);
    let finishS = Number(input[3]);
    let count = 0;
    let print = 0;

    for (let i = startF; i <= 8; i++) {
        for (let j = 9; j >= finishF; j--) {
            for (let k = startS; k <= 8; k++) {
                for (let l = 9; l >= finishS; l--) {
                    if (i % 2 === 0 && j % 2 !== 0 && k % 2 === 0 && l % 2 !== 0) {
                        if (i === k && j === l && count <= 6) {
                            console.log(`Cannot change the same player.`);
                        } else {
                            count++;
                            if (count > 6) {
                                break;
                            } else {
                                print = `${i}${j} - ${k}${l}`;
                                console.log(print);
                            }
                        }
                    }
                }
            }
        }
    }
}
change(["6", "7", "5", "6"])