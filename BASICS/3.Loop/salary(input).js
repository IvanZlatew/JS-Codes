function salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);
    let isHaveSalary = true;

    for (let i = 1; i <= n; i++) {
        switch (input[i + 1]) {
            case `Facebook`: salary -= 150; break;
            case `Instagram`: salary -= 100; break;
            case `Reddit`: salary -= 50; break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            isHaveSalary = false;
            break;
        }
    }
    if (isHaveSalary) {
        console.log(Math.trunc(salary));
    }
}
    salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])
    

