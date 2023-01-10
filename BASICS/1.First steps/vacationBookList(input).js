function suppliesForSchool(input){
    let pencils = Number(input[0]);
    let markers = Number(input[1]);
    let thiner = Number(input[2]);
    let discount = Number(input[3]);
    let sum = pencils * 5.80 + markers * 7.20 + thiner * 1.20;
    let total = sum - sum*(discount / 100);
    console.log(total);
    }
    suppliesForSchool(['2','3','4','25']);
