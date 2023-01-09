function shopping(input){
let budget = Number(input[0]);
let videoCard = Number(input[1]);
let processor = Number(input[2]);
let ram = Number(input[3]);
if(videoCard > processor){
    let price = ((videoCard * 250 + processor * (videoCard * 250 ) * 0.35 + ram * (videoCard * 250 ) * 0.10) * 0.85);
    if (budget >= price){
        let res = (budget - price).toFixed(2);
        console.log(`You have ${res} leva left!`);
        } else {
            let res = (price - budget).toFixed(2);
            console.log(`Not enough money! You need ${res} leva more!`);
        }
} else {
    let price = (videoCard * 250 + processor * (videoCard * 250 ) * 0.35 + ram * (videoCard * 250 ) * 0.10);
if(budget >= price){
        let res = (budget - price).toFixed(2);
    console.log(`You have ${res} leva left!`);
    } else {
        let res = (price - budget).toFixed(2);
        console.log(`Not enough money! You need ${res} leva more!`);
    }
}
}
shopping(['920.45','3','1','1'])