function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let sumStudio = 0;
    let sumApartment = 0;

    if (month === `May` || month === `October`) {
        if (nights <= 7) {
            sumStudio = nights * 50;
            sumApartment = nights * 65;
        } else if (nights > 7 && nights <= 14) {
            sumStudio = nights * 50 * 0.95;
            sumApartment = nights * 65;
        } else {
            sumStudio = nights * 50 * 0.70;
            sumApartment = nights * 65 * 0.90;
        }
    } else if (month === `June` || month === `September`) {
        if (nights <= 14) {
            sumStudio = nights * 75.20;
            sumApartment = nights * 68.70;
        } else {
            sumStudio = nights * 75.20 * 0.80;
            sumApartment = nights * 68.70 * 0.90;
        }
    } else {
        if (nights <= 14) {
            sumStudio = nights * 76;
            sumApartment = nights * 77;
        } else {
            sumStudio = nights * 76;
            sumApartment = nights * 77 * 0.90;
        }
    }
    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);
}
hotelRoom([`May`, `15`])