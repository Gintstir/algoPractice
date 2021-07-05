// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        currentArrNum = arr[i];
        result += currentArrNum;
    }
    return result;
};
