function average(input) {
    let index = 0;
    let times = Number(input[index]);
    index++;
    let sum = 0;

    while (index <= times) {
        let number = Number(input[index]);
        sum += number;
        index++;
    }
    console.log((sum / times).toFixed(2));
}
average([4, 3, 2, 4, 2])