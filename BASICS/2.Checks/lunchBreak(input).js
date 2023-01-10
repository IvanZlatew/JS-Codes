function lunchBreak(input){
    let film = input[0];
    let timeFilm = Number(input[1]);
    let timeRest = Number(input[2]);
    let timeLunch = timeRest * 0.125;
    let timeRel = timeRest * 0.25;
    let occupTime = timeFilm + timeLunch + timeRel;
    if(timeRest >= occupTime){
        let res = Math.ceil(timeRest - occupTime);
        console.log(`You have enough time to watch ${film} and left with ${res} minutes free time.`);
    } else {
        let res = Math.ceil(occupTime - timeRest);
        console.log(`You don't have enough time to watch ${film}, you need ${res} more minutes.`);
    }
}
lunchBreak(['Game of Thrones','48','60'])