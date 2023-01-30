function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (let i = floor; i >= 1; i--) {
        let print = ``;
        for (let j = 0; j < room; j++) {
            if (i === floor) {
                print += `L${i}${j} `;
            } else if (i % 2 === 0) {
                print += `O${i}${j} `;
            } else if (i % 2 !== 0) {
                print += `A${i}${j} `;
            }
        }
        console.log(print);
    }
}
building(["6", "4"])