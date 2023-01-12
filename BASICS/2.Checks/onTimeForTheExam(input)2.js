function onTimeForTheExam(input) {
    let h1 = Number(input[0]);
    let m1 = Number(input[1]);
    let h2 = Number(input[2]);
    let m2 = Number(input[3]);

    let status = ``;
    let res1 = 0;
    let res2 = 0;

    if (h2 > h1 + 1) {
        if (m1 > m2) {
            status = `Late`;
            res1 = 60 - m1 + m2;
            res2 = h2 - h1;
        } else if (m1 <= m2) {
            status = `Late`;
            res1 = - m1 + m2;
            res2 = h2 - h1;
        }
    } else if (h2 > h1 && h1 == h2 - 1) {
        if (m1 > m2) {
            status = `Late`;
            res1 = 60 - m1 + m2;
            res2 = 0;
        } else {
            status = `Late`;
            res1 = m2 - m1;
            res2 = h2 - h1;
        }
    } else if (h1 = h2) {
        if (m2 > m1) {
            status = `Late`;
            res1 = m2 - m1;
            res2 = 0;
        } else if (m2 < m1 && m1 - m2 <= 30) {
            status = `On time`;
            res1 = m1 - m2;
            res2 = 0;
        }
    } else {
        if (h1 = h2 + 1) {
            if (m1 < m2) {
                status = `Early`;
                res1 = 60 - m2 + m1;
                res2 = 0;
            } else {
                status = `Early`;
                res1 = m1 - m2;
                res2 = 1;
            }
        } else {
            if (m1 < m2) {
                status = `Early`;
                res1 = 60 - m2 + m1;
                res2 = h1 - h2;
            } else {
                status = `Early`;
                res1 = m1 - m2;
                res2 = h1 - h2;
            }
        }
    }

    console.log(`${status}`);
    console.log(res2);
    console.log(res1);


}

onTimeForTheExam([`9`, `40`, `12`, `20`])