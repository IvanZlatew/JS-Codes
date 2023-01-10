function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);
    let volume = (lenght * width * height) / 1000;
    let others = volume * (percentage / 100); 
    let total = volume - others;
    console.log(total);
    }
    fishTank(['85','75','47','17']);