function bonusScore(input){
let a = Number(input[0]);
if(a <= 100){
if(a % 2 === 0){
    console.log(5 + 1);
    console.log(a + 5 + 1);
} else if ( a % 5 === 0 ) {
console.log(5 + 2);
console.log(a + 5 +2);
} else {
    console.log(5);
    console.log(a + 5);
}
} else if(a <= 1000){
    if(a % 2 === 0){
        console.log(a * 0.2 + 1);
        console.log(a + a * 0.2 + 1);
    } else if ( a % 5 === 0 ) {
    console.log(a * 0.2 + 2);
    console.log(a + a * 0.2 +2);
    } else {
        console.log((a * 0.2).toFixed(1));
        console.log((a + a * 0.2).toFixed(1));
}
}
if(a > 1000){
    if(a % 2 === 0){
        console.log(a * 0.1 + 1);
        console.log(a + a * 0.1 + 1);
    } else if ( a % 5 === 0 ) {
    console.log(a * 0.1 + 2);
    console.log(a + a * 0.1 +2);
    } else {
        console.log((a * 0.1).toFixed(1));
        console.log((a + a * 0.1).toFixed(1));
}
}
}
bonusScore(['1271'])