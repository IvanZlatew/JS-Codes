function number1To100() {
    let index = 0;
    index++;
    while (index <= 100) {
        if (index % 3 === 0) {
            console.log(index);
            index++;
        } else {
            index++;
        }
    }
}
number1To100()