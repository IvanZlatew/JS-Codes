function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let sum = 0;
    let type = ``;
    let destination = ``;

    if (budget <= 100) {
        switch (season) {
            case `summer`:
                sum = budget * 0.30;
                type = `Camp`;
                destination = `Bulgaria`;
                break;
            case `winter`:
                sum = budget * 0.70;
                type = `Hotel`;
                destination = `Bulgaria`;
                break;
            default: ; break;
        }
    } else if (budget > 100 && budget <= 1000) {
        switch (season) {
            case `summer`:
                sum = budget * 0.40;
                type = `Camp`;
                destination = `Balkans`;
                break;
            case `winter`:
                sum = budget * 0.80;
                type = `Hotel`;
                destination = `Balkans`;
                break;
            default: ; break;
        }
    } else {
        sum = budget * 0.90;
        type = `Hotel`;
        destination = `Europe`;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${sum.toFixed(2)}`);
}
journey([`50`, `summer`])