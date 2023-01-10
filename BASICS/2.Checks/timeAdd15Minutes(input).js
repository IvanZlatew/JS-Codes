function timeAdd15Minutes(input){
let h = Number(input[0]);
let m = Number(input[1]);
let sum = h * 60 + m + 15;
let newHour = Math.floor(sum / 60 );
let newMin = sum % 60;
if(newHour > 23){
    newHour = 0;
    if (newMin < 10){
        console.log (`${newHour}:0${newMin}`);
    } else {
        console.log (`${newHour}:${newMin}`);
    }
    } else if ( newHour <= 23){
        if (newMin < 10){
            console.log (`${newHour}:0${newMin}`);
            } else {
                console.log(`${newHour}:${newMin}`);
            }
        }
}
timeAdd15Minutes(['23','58'])