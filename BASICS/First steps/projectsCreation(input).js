function projectsCreation(input){
    let firstName = input[0];
    let projects = input[1];
    let hours = input[1]*3;
    console.log(`The architect ${firstName} will need ${hours} hours to complete ${projects} project/s.`);
    }
projectsCreation(['Ivan',4]);