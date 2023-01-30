function biggestNumber(input) {
    let index = 0;
    let n = input[index];
    let biggest = Number(input[0]);

    while (n !== `Stop`) {
        index++;
        n = input[index];
        if (n === `Stop`) {
            break;
        } else {
            if (biggest > Number(n)) {
                n = input[index];
            } else {
                biggest = n;
            }
        }
    }
    console.log(biggest);
}
biggestNumber(["100",
"99",
"80",
"70",
"Stop"])
