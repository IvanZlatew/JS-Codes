function average(input) {
    let times = Number(input[0]);
    let sum = 0;
    for (i = 1; i <= times; i++) {
        let numbers = Number(input[i]);
        sum += numbers;
    }
    console.log((sum / times).toFixed(2));
}
average([4, 3, 2, 4, 2])