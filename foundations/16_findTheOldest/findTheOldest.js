const findTheOldest = function(arr) {
    //return oldest person object
    let oldestAge = 0;
    let oldestPerson = {};
    for (let currentPerson of arr){
        // debugger;
        let currentAge = 0;
        // if no death given, calculate current year instead
        if(!Object.hasOwn(currentPerson, "yearOfDeath")){
            currentPerson.yearOfDeath = new Date().getFullYear();
        }
        // calculate age
        currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        if (currentAge > oldestAge){
            oldestAge = currentAge;
            oldestPerson = currentPerson;
        }
    };
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
