// Write code to create a function takes a string and returns the string with all of the letter cases swapped


//create new string
//scan through array, if letter is lower case, change to upper case and add to new String,
//else change to lower case and add to new string
//return new string
var swapCase = function(str) {
    let newLetters = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            newLetters += str[i].toUpperCase();
        } else {
            newLetters += str[i].toLowerCase();
        }
    }
    return newLetters;
};
