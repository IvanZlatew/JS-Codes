function foodDelivery(input){
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetarian = Number(input[2]);
    let menu = chicken * 10.35 + fish * 12.40 + vegetarian * 8.15;
    let dessert = menu * 0.20; 
    let total = menu + dessert + 2.50;
    console.log(total);
    }
    foodDelivery(['2','4','3']);