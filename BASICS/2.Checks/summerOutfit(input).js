function summerOutfit(input) {
    let hour = Number(input[0]);
    let type = input[1];
    let shoe1 = `Sneakers`;
    let shoe2 = `Moccasins`;
    let shoe3 = `Sandals`;
    let shoe4 = `Barefoot`;
    let outfit1 = `Sweatshirt`;
    let outfit2 = `Shirt`;
    let outfit3 = `T-Shirt`;
    let outfit4 = `Swim Suit`;
    if (hour >= 10 && hour <= 18) {
        switch (type) {
            case `Morning`: console.log(`It's ${hour} degrees, get your ${outfit1} and ${shoe1}.`); break;
            case `Afternoon`: console.log(`It's ${hour} degrees, get your ${outfit2} and ${shoe2}.`); break;
            case `Evening`: console.log(`It's ${hour} degrees, get your ${outfit2} and ${shoe2}.`); break;
            default: ; break;
        }
    } else if (hour > 18 && hour <= 24) {
        switch (type) {
            case `Morning`: console.log(`It's ${hour} degrees, get your ${outfit2} and ${shoe2}.`); break;
            case `Afternoon`: console.log(`It's ${hour} degrees, get your ${outfit3} and ${shoe3}.`); break;
            case `Evening`: console.log(`It's ${hour} degrees, get your ${outfit2} and ${shoe2}.`); break;
            default: ; break;
        }
    } else if (hour >= 25) {
        switch (type) {
            case `Morning`: console.log(`It's ${hour} degrees, get your ${outfit3} and ${shoe3}.`); break;
            case `Afternoon`: console.log(`It's ${hour} degrees, get your ${outfit4} and ${shoe4}.`); break;
            case `Evening`: console.log(`It's ${hour} degrees, get your ${outfit2} and ${shoe2}.`); break;
            default: ; break;
        }
    }
}
summerOutfit([`16`, `Morning`])