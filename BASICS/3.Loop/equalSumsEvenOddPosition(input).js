function equalSumsEvenOddPosition(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let print = ``;

    for (i = first; i <= second; i++) {
        let currentNum = `` + i;
        let oddSum = 0;
        let evenSum = 0;
        for (j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            print += `${i} `;
        }
    }
    console.log(print);
}
equalSumsEvenOddPosition(["100000", "100050"])
