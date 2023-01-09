function deposit(input){
    let depositSum = Number(input[0]);
    let monthsDeposit = Number(input[1]);
    let annualInterest = Number(input[2]);
    let monthsSum = depositSum * (annualInterest / 100) / 12;
    let res = depositSum + monthsSum * monthsDeposit;
    console.log(res);
    }
    deposit(['200','3','5.7']);
