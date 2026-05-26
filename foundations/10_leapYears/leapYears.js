const leapYears = function(year) {
    switch (year % 4){
        case 0:
            if(year % 100 == 0){
                if (year % 400 == 0) return true;
                return false;
            }
            return true;
            break;

        default:
            return false;
            break;
    }
};

// Do not edit below this line
module.exports = leapYears;
