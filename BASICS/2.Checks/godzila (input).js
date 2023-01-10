function godzila (input) {
    let budjet = Number(input[0]);
    let statisti = Number(input[1]);
    let cenaOlekloStatist = Number(input[2]);
    let dekor = budjet * 0.10;
    let cenaObleklo = statisti * cenaOlekloStatist;
       if (statisti > 150) {
           cenaObleklo = cenaObleklo * 0.9;
       }
       let suma = cenaObleklo + dekor;
       let razlika = Math.abs(suma - budjet);
       if (suma > budjet) {
           console.log(`Not enough money!`);
           console.log(`Wingard needs ${razlika.toFixed(2)} leva more.`);
       } else if (suma <= budjet) {
           console.log(`Action!`);
           console.log(`Wingard starts filming with ${razlika.toFixed(2)} leva left.`);
       }

}
godzila (["15437.62","186","57.99"]);