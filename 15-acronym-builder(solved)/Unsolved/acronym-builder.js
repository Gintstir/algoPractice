// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
    var words = str.split(" ");
    result = ""
    console.log(words);

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        result += word[0].toUpperCase();

    }
    //console.log(firstLetter);
    return result;
};

console.log(acronymBuilder("i could always eat a sandwich, duh!"));