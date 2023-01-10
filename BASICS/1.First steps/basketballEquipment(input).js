function basketballEquipment(input){
    let annualTax = Number(input[0]);
    let sneakers = annualTax - annualTax * 0.40;
    let clothes = sneakers - sneakers * 0.20;
    let ball = clothes / 4; 
    let accessories = ball / 5;
    let total = annualTax + sneakers + clothes + ball + accessories;
    console.log(total);
    }
    basketballEquipment(['365']);