function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thiner = Number(input[2]);
    let hours = Number(input[3]);
    let materials = (nylon + 2) * 1.50 + (paint + paint * 0.10) * 14.50 + thiner * 5.00 + 0.40; 
    let total = materials + materials * (hours * 0.30);
    console.log(total);
    }
    repainting(['10','11','4','8']);