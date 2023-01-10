function sumSeconds(input){
let time1 = Number(input[0]);
let time2 = Number(input[1]);
let time3 = Number(input[2]);
let min = Math.floor((time1 + time2 + time3) / 60);
let sec = ((time1 + time2 + time3) % 60);
if(sec < 10){
console.log(`${min}:0${sec}`);
} else {
console.log(`${min}:${sec}`);
}
}
sumSeconds(['38','48','48']);