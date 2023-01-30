function reportSystem(input) {
    let index = 0;
    let sumN = Number(input[index]);
    index++;
    let counterPr = 0;
    let counterOdd = 0;
    let counterEven = 0;
    let sumOdd = 0;
    let sumEven = 0;
    let isHaveSum = false;

    let command = input[index];
    index++;

    while (command !== "End") {
        let product = Number(command);
        counterPr++;
        if (counterPr % 2 !== 0 && product <= 100) {
            counterOdd++;
            sumOdd += product;
            console.log(`Product sold!`);
        } else if (counterPr % 2 === 0 && product >= 10) {
            counterEven++;
            sumEven += product;
            console.log(`Product sold!`);
        } else {
            console.log(`Error in transaction!`);
        }
        
        if ((sumEven + sumOdd) >= sumN) {
            isHaveSum = true;
            break;            
        }
      command = input[index];
      index++;
    }
    let diffOdd = (sumOdd / counterOdd).toFixed(2);
    let diffEven = (sumEven / counterEven).toFixed(2);
    if (!isHaveSum){
        console.log(`Failed to collect required money for charity.`);
    } else {console.log(`Average CS: ${diffOdd}`);
    console.log(`Average CC: ${diffEven}`);

    } 

}
reportSystem(["600",
    "86",
    "150",
    "98",
    "227", "End", "317"]);