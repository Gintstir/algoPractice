// function sayHello() {
//     console.log("hi Gint!");    
// }

// sayHello();


//determine which letter occurs the most number of times in a string, case sensitive, if tied, which letter occurs first
// function maximumOccuringCharacters(text) {
//     let letters = {};
//     let max = 0;
//     let maxChar = [];
    
//     for (let i = 0; i < text.length; i++) {
//         if(text[i] in letters) {
//             letters[text[i]]++;
//         } else {
//             letters[text[i]] = 1;
//         }
//         //console.log(letters);
//     }
//     for (value in letters) {
//          if (letters[value] > max) {
//             max = letters[value];
//             maxChar = [value];
//          } else if (letters[value] === max) {
//              maxChar.push(value);
             
//          }
//         //console.log(maxChar);
//     }
//     return maxChar[0];
// }

// console.log(maximumOccuringCharacters("helllloWORLDDDD"));



// function maxTickets(tickets) {
//     let sorted = tickets.sort();
//     let count = 1;
//     let subsequence = [];
//     //console.log(sorted);
//     for(i = 0; i < sorted.length; i++) {
//         let ticket = sorted[i]
//         let nextTicket = sorted[i + 1];
//         if(ticket === nextTicket || nextTicket - ticket === 1) {
//             count ++;
//         } else {
//             subsequence.push(count);
//             count = 1;
//         }
//     }
//     console.log(subsequence);
//     console.log(Math.max(...subsequence));

// }

// console.log(maxTickets([8, 5, 4, 8, 4]));

// function toolChanger(tools, startIndex, target) {
    
//     //console.log(tools.indexOf(target));
//     let clockwise = tools.indexOf(target) - startIndex;
//     let sub = tools.slice(startIndex + 1);
//     let sub2 = tools.slice(0, startIndex + 1)
//     let newTools = [...sub, ...sub2];
//     let startValue = tools[startIndex];
//     let counterclockwise = newTools.indexOf(startValue) - newTools.indexOf(target);

//     return Math.min(clockwise, counterclockwise);
    
//     // console.log(sub);
//     // console.log(sub2);
//     // console.log(newTools);
//     // console.log(clockwise);
//     // console.log(counterclockwise);
    
// }

// console.log(toolChanger([ 'facemill', 'slotdrill', 'ballendmill', 'ballendmill' ], 0, "ballendmill"));