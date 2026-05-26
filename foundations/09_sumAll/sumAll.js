const sumAll = function(num1, num2) {
    let min = num1;
    let max = num2;
    let sum = 0;

    if(!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR"
    }

    if(min < 0 || max < 0){
        return "ERROR";
    }

    if(min > max){
        temp = max;
        max = min;
        min = temp;
    }
    
    while(min <= max){
        sum += min;
        min++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
