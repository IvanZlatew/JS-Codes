function yardGreening(input){
    let final = input[0];
    let discount = input[1];
    let yard = input[2]*7.61 - input[2]*7.61*input[3];
    let discount2 = input[2]*7.61*input[3];
    let str1 = `${final} ${yard}`;
    let str2 = `${discount} ${discount2}`;
    console.log(str1);
    console.log(str2);
}
yardGreening(['The final price is:','The discount is:',550,0.18]);