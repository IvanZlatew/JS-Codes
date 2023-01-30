function breakText(input) {

    let index = 0;
    while (true) {
        let name = input[index];
        index++;
        if (name === `Sneja`) {
            break;
        }
        console.log(name);
    }

}

breakText([`Ivan`, `Gosho`, `Deni`, `Tancho`, `Sneja`, `Petar`])