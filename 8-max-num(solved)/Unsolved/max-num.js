// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let largest = arr[0];

    for (i = 1; i < arr.length; i++) {
       let currentNum = arr[i];

       if (currentNum > largest) {
           largest = currentNum;
       }       
    }
    return largest;   
};
