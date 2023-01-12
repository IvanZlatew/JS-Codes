function onTimeForTheExam(input) {
    let h1 = Number(input[0]);
    let m1 = Number(input[1]);
    let h2 = Number(input[2]);
    let m2 = Number(input[3]);

    let exTime = h1 * 60 + m1;
    let arrTime = h2 * 60 + m2;

    if (exTime < arrTime) {
        console.log(`Late`);
        let diff = Math.abs(exTime - arrTime);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h >= 1) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`)
            }
        } else {
            console.log(`${m} minutes after the start`);
        }
    } else if (exTime === arrTime || exTime - arrTime <= 30) {
        console.log(`On time`);
        let diff = Math.abs(exTime - arrTime);
        if (diff !== 0) {
            let m = diff % 60;
            console.log(`${m} minutes before the start`);
        }
    } else {
        console.log(`Early`);
        let diff = Math.abs(exTime - arrTime);
        let h = Math.floor(diff / 60);
        let m = diff % 60;
        if (h >= 1) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`)
            }
        } else {
            console.log(`${m} minutes before the start`);
        }
    }
}
onTimeForTheExam([`9`, `40`, `12`, `20`])