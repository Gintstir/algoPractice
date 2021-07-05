// Write code to create a function that returns the factorial of `num`
// this is the recursive approach
var factorial = function(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
};
