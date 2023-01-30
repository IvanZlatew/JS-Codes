function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let primeN = 0;
    let nonPrime = 0;

    while (command !== `stop`) {
        let num = Number(command);
        if (num < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++;
            continue;
        }
        let countP = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                countP++;
            }
        }
        if (countP <= 2) {
            primeN += num;
        } else if (countP > 2) {
            nonPrime += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeN}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}
sumPrimeNonPrime([`1`, `4`, `5`, `30`, "83", "stop"])

