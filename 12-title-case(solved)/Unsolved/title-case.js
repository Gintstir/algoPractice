// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {

    //split the string into an array of strings delineated by white space
    const arr = str.split(" ");
    //loop through each array, find the character at position 0 and capitalize the first letter
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    //create a new string where that those array are rejoined using blankspace as separator
    let str2 = arr.join(" ");
    return str2;

};
