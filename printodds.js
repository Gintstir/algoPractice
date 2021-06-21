console.log("hello");

//this function prints all odd numbers between two values including the values themselves
function oddNums(a, b) {
    for(i = a; i <= b; i++) { //classic for loop a is starting value, loop  should continue b times. incrementing once
        if ( i % 2 !== 0) { //using the modulus operator, if the value divided by two DOES NOT have a value of 0, print value)
            console.log(i);
        }
        
    }
    //console.log(a, b)
}

oddNums(1, 15);