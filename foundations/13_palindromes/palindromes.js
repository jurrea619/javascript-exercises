const palindromes = function (str) {
    // remove punctuation from string
    let newString = removePunctuation(str);
    // debugger;

    // variables used for iteration inwards
    let head = 0;
    let tail = newString.length-1;

    // iterate from both ends of word inwards
    while( head < newString.length ){
        //grab letter from both ends of word
        let frontLetter = newString[head];
        let backLetter = newString[tail];

        // compare letters, case-insensitive
        if (frontLetter.toLowerCase() != backLetter.toLowerCase()){
            return false;
        }
        
        // letters match, move head and tail inwards
        head++;
        tail--;
    }

    return true;
};

// function removePunctuation(str){
//     const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
//     let result = "";

//     for (let i = 0 ; i < str.length ; i++){
//         let character = str.charAt(i);
//         if(!punctuation.includes(character)){
//             result += character;
//         }
//     }
//     return result;
// }

function removePunctuation(str) {
    return str.split('').filter(char => {
        return /[a-zA-Z0-9]/.test(char);
    }).join('');
}

// Do not edit below this line
module.exports = palindromes;
