function tradeCommissions(input) {
    let town = input[0];
    let volume = Number(input[1]);
    if (volume < 0) {
        console.log(`error`);
    } else {
        if (volume >= 0 && volume <= 500) {
            switch (town) {
                case `Sofia`: price = (volume * 0.05).toFixed(2); console.log(price); break;
                case `Varna`: price = (volume * 0.045).toFixed(2); console.log(price); break;
                case `Plovdiv`: price = (volume * 0.055).toFixed(2); console.log(price); break;
                default: console.log(`error`);
            }
        } else if (volume > 500 && volume <= 1000) {
            switch (town) {
                case `Sofia`: price = (volume * 0.07).toFixed(2); console.log(price); break;
                case `Varna`: price = (volume * 0.075).toFixed(2); console.log(price); break;
                case `Plovdiv`: price = (volume * 0.08).toFixed(2); console.log(price); break;
                default: console.log(`error`);
            }
        } else if (volume > 1000 && volume <= 10000) {
            switch (town) {
                case `Sofia`: price = (volume * 0.08).toFixed(2); console.log(price); break;
                case `Varna`: price = (volume * 0.10).toFixed(2); console.log(price); break;
                case `Plovdiv`: price = (volume * 0.12).toFixed(2); console.log(price); break;
                default: console.log(`error`);
            }
        } else {
            switch (town) {
                case `Sofia`: price = (volume * 0.12).toFixed(2); console.log(price); break;
                case `Varna`: price = (volume * 0.13).toFixed(2); console.log(price); break;
                case `Plovdiv`: price = (volume * 0.145).toFixed(2); console.log(price); break;
                default: console.log(`error`);
            }
        }
    }
}
tradeCommissions([`Varna`, `503874.50`])