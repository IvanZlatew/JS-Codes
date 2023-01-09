function worldSwim(input){
let record = Number(input[0]);
let distance = Number(input[1]);
let speed = Number(input[2]);
let addTime = Math.floor(distance / 15);
let delay = distance % 15;
let totalTime = (distance * speed + addTime * 12.5).toFixed(2);
if(totalTime < record){
    console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`);
     } else { 
         let res = (totalTime - record).toFixed(2);
         console.log(`No, he failed! He was ${res} seconds slower.`);
     }
}
worldSwim(['10464','1500','20'])