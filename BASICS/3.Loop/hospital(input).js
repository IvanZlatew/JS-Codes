function hospital(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let examine = 0;
    let notExamine = 0;
    let addDoctor = 7;

    for (i = 1; i <= days; i++) {
        let totalPatients = Number(input[index]);
        index++;
        if (i % 3 !== 0) {
            if (totalPatients <= addDoctor) {
                examine += totalPatients;
            } else {
                examine += addDoctor;
                notExamine += totalPatients - addDoctor;
            }
        } else {
            if (notExamine > examine) {
                addDoctor++;
                if (totalPatients > addDoctor) {
                    examine += addDoctor;
                    notExamine += totalPatients - addDoctor;
                } else {
                    examine += totalPatients;
                }
            } else {
                if (totalPatients > addDoctor) {
                    examine += addDoctor;
                    notExamine += totalPatients - addDoctor;
                } else {
                    examine += totalPatients;
                }
            }
        }
    }

    console.log(`Treated patients: ${examine}.`);
    console.log(`Untreated patients: ${notExamine}.`);
}

hospital([`6`, `25`, `25`, `25`, `25`, `25`,`2`])