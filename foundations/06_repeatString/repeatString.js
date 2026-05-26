const repeatString = function(str, num) {
    if (num < 0) return "ERROR";
    
    let newString = '';

    for (let i = 0 ; i < num ; i++){
        newString += str;
    }
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
