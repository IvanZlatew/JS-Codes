function godKong(input){
let bud = Number(input[0]);
let staff = Number(input[1]);
let clothes = Number(input[2]);
let decor = bud * 0.1;
if(staff > 150){
    let sumClothes = (staff * clothes) * 0.9;
    let res = (bud - decor - sumClothes).toFixed(2);
        if(res >= 0){
            console.log(`Action!`);
            console.log(`Wingard starts filming with ${res} leva left.`);
                    } else {
                        let res = (decor + sumClothes - bud).toFixed(2);
                        console.log(`Not enough money!`);
            console.log(`Wingard needs ${res} leva more.`);
                    }
}
if(staff <=150){
    let res = (bud - decor - staff * clothes).toFixed(2);
        if(res >= 0){
            console.log(`Action!`);
            console.log(`Wingard starts filming with ${res} leva left.`);
                    } else {
                        let res = (decor + staff * clothes - bud).toFixed(2);
                        console.log(`Not enough money!`);
            console.log(`Wingard needs ${res} leva more.`);
                    }
}
}
godKong(['15437.62',"186","57.99"])