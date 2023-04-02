// // Q1: Write a function that checks if a number is even or odd


// const output = (input) => {
//     return Math.floor(input) % 2 == 0 ? "even" : "odd";
// }

// const param = 12.2;

// console.log(output(param));


// Q2: Write a function that calculates the sum of an array of numbers


// const output = (input) => {
//     let sum = 0;
//     for (let i = 0; i < input.length; i++){
//         sum+=input[i];
//     }
//     return sum;
// }

// const param = [1,2,4];

// console.log(output(param));


// Q3: Write a function that returns the average of an array of numbers

// const output = (input) => {
//     let sum = 0;
//     for (let i = 0; i < input.length; i++){
//         sum+=input[i];
//     }
//     return sum/input.length;
// }

// const param = [1,2,3];

// console.log(output(param));


// Q4: Write a function that calculates the factorial of a given number

// const output = (input) => {
//     let factorial = 1;

//     while (input > 0) {
//         factorial *= input;
//         input--;
//     }

//     return factorial;
// }

// const param = 6;

// console.log(output(param));


// Q5: Write a function that checks if a given string is a valid email address

// const output = (input) => {
// let pattern =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// let result = input.match(pattern);
//     return result==null? "invalid" : "valid";
// }

// const param = "amjadsaeed@gmail.com";

// console.log(output(param));


// Q6: Write a function that checks if a given string is a valid URL

// const output = (input) => {
// let pattern = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
// let result = input.match(pattern);
//     return result==null? "invalid" : "valid";
// }

// const param = "https://stackoverflow";

// console.log(output(param));



// Q7: Write a function that converts a string to a title case

// const output = (input) => {
//     let result=[];
//     input.split(" ").map((item)=>{
//          result.push(item.at(0).toUpperCase()+item.toLowerCase().slice(1));
//     })
//     return result.join(" ");
// // return input.split(" ");
// }

// const param = "amjad saEEd";

// console.log(output(param));


// Q8: Write a function that returns the nth Fibonacci number

// const output = (input) => {
//     var num1=0;
//     var num2=1;
//     var sum;
//     var i=0;
//     for (i = 0; i < input; i++)
//     {
//     sum=num1+num2;
//     num1=num2;
//     num2=sum;
//     }
//     return num2;
// }

// const param = 5;

// console.log(output(param));



// Q9: Write a function that checks if a given number is prime

// const output = (input) => {
//     let result
//     for (let i = 2; i * i <=input; i++) {
//        return input % i == 0 ? false : true;
//     }
//     // return result;
// }

// const param = 11;

// console.log(output(param));


// Q10: Write a function that checks if a given year is a leap year

// const output = (input) => {
//    return input % 4 == 0 && input % 100 != 0 || input % 400 == 0 ? "LeapYear" : "Not Leap Year";
// }

// const param = 2032;

// console.log(output(param));


// Q11: Write a function that finds the maximum value in an array

// const output = (input) => {
//     let sortedArray
//     sortedArray = input.sort((a, b)=>{return a-b});

//         return sortedArray[input.length - 1];
// }

// const param = [2,5,3,5,7,3,67,9];
// console.log(output(param));


// Q12: Write a function that finds the minimum value in an array

// const output = (input) => {
//     let sortedArray
//     sortedArray = input.sort((a, b)=>{return a-b});

//         return sortedArray[0];
// }

// const param = [2,5,3,5,7,3,67,9];
// console.log(output(param));


// Q13: Write a function that finds the second-largest number in an array

// const output = (input) => {
//     let sortedArray
//     sortedArray = input.sort((a, b)=>{return a-b});

//         return sortedArray[input.length - 2];
// }

// const param = [2,5,3,5,7,3,67,9];
// console.log(output(param));


// Q14: Write a function that reverses the order of words in a sentence

// const output = (input) => {

//         return input.split(" ").reverse().join(" ");
// }

// const param = "saeed amjad";
// console.log(output(param));


// Q15: Write a function that reverses the words in a sentence

// const output = (input) => {
// // Split the sentence into words
// const words = input.split(' ');

// // Reverse the characters of each word
// const reversedWords = words.map(word => word.split('').reverse().join(''));

// // Join the reversed words back into a sentence
// const reversedSentence = reversedWords.join(' ');

// return reversedSentence;
// }

// const param = "1234 1234";
// console.log(output(param)); // Output: ["deesa", "djam", ""] 



// Q16: Write a function that counts the number of vowels in a given string

// const output = (input) => {
//     let removeSpaces = input.replace(/\s/g, '');
//     let vowels = ["a","e","i","o","u","s"]
//     let countVowels = 0;

//     for (let i = 0; i < vowels.length; i++){
//         if(vowels.includes(removeSpaces[i])){
//             countVowels++;
//         }
//     }
//         return removeSpaces;
// }

// const param = "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et ";
// console.log(output(param));


// Q17: Write a function that checks if a given string is a palindrome

// const output = (input) => {

//     return input.split('').reverse().join('')==input ? true : false;
// }

// const param = "111";
// console.log(output(param));



// Q18: Write a function that returns the sum of all even numbers in an array

// const output = (input) => {
//     let sum = 0;

//     for (let index = 0; index < input.length; index++) {
//        if(input[index]%2==0) {
//         sum+=input[index];
//        }

//     }
//     return sum;
// }

// const param = [1,3,2,2];
// console.log(output(param));


// Q19: Write a function that returns the sum of all odd numbers in an array

// const output = (input) => {
//     let sum = 0;

//     for (let index = 0; index < input.length; index++) {
//        if(input[index]%2!=0) {
//         sum+=input[index];
//        }

//     }
//     return sum;
// }

// const param = [3,3,2,2];
// console.log(output(param));


// Q20: Write a function that sorts an array of numbers in ascending order

// const output = (input) => {

//     return input.sort((a,b) => {return a-b});
// }

// const param = [3,3,2,2];
// console.log(output(param));



// Q21: Write a function that sorts an array of numbers in descending order

// const output = (input) => {

//     return input.sort((a,b) => {return b-a});
// }

// const param = [3,3,2,2];
// console.log(output(param));


// Q22: Write a function that returns the length of the longest word in a sentence

// const output = (input) => {

//     let toArray = input.split(" ");
//     let longestLen = "";
//     let currentLen = 0;


//     for (let i = 0; i < toArray.length; i++){
//         currentLen = toArray[i].length;
//         if (currentLen > longestLen.length){
//             longestLen = toArray[i];
//         }
//     }

//     return longestLen;
// }

// const param = "length of the longest word in a sentence sentencesentence";
// console.log(output(param));



// Q23: Write a function that finds the first non-repeating character in a given string

// const output = (input) => {
//     let toArray = input.split("");
//     let nonRepeating = [];

//     for (let index = 0; index < input.length; index++) {
//         if (!nonRepeating.includes(input[index])) {
//             nonRepeating.push(input[index]);
//         } else {
//             nonRepeating = nonRepeating.filter((char) => char !== input[index]);
//         }
//     }

//     return nonRepeating[0];
// }

// const param = "lenegtahtl";
// console.log(output(param));


// Q24: Write a function that checks if two strings are anagrams

// const output = (input, input2) => {
//     let count = 0;

//     let toArray = input.split("");

//     for (let index = 0; index < input2.length; index++) {
//         if (toArray.includes(input2[index])) {
//             count++;
//         }

//     }

//     return count == input2.length ? "anagram" : "not anagram";
// }

// const param = "listen";
// const param2 = "silent";

// console.log(output(param, param2));



// Q25: Write a function that removes duplicates from an array of numbers

// const output = (input) => {

//     return [...new Set(input)];
// }

// const param = [1,1,2];

// console.log(output(param));


// Q26: Write a function that removes duplicates from an array of numbers

// const output = (input) => {

//     let uniq = [];

//     for (let i = 0; i < input.length; i++){
//         if(!uniq.includes(input[i])){
//             uniq.push(input[i]);
//         }
//     }

//     return uniq;
// }

// const param = [1,1,2,2,5,32,5,7,6,3,1,7,5,3,5,8,90,8,5,3,2,2];

// console.log(output(param));



// Q27: Write a function that finds the missing number in an array of numbers

// const output = (input) => {
//     let missingNumbers = [];
//     let range = Math.max(...input);

//     for (let index = 1; index <= range; index++) {
//       if (!input.includes(index)) {
//         missingNumbers.push(index);
//       }
//     }

//     return missingNumbers;
//   };

//   const param = [4, 1, 4, 10];
//   console.log(output(param)); // should output [2, 3, 5, 6, 7, 8, 9]




// Q28: Write a function that returns the reverse of a given string

// const output = (input) => {
//     let reverseString = [];


//     for (let index = input.length-1; index >=0; index--) {
//         reverseString.push(input[index]);
//     }

//     return reverseString.join("");
//   };

//   const param = "amjad";
//   console.log(output(param)); 



// Q29: Write a function that converts a number to its binary representation

// const output = (input) => {

//     return (input >>> 0).toString(2);;
//   };

//   const param = -1;
//   console.log(output(param)); 



// Q30: Write a function that checks if a given string is a valid phone number

// const output = (input) => {
// let pattern =  /^((\+)33|0)[1-9](\d{2}){4}$/;
// let result = input.match(pattern);
//     return result==null? "invalid" : "valid";
// }

// const param = "+33777777777";

// console.log(output(param));


// Q31: Write a function that checks if a given string is a valid phone number

// const output = (input) => {
//     var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
//     var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
//     var amexpRegEx = /^(?:3[47][0-9]{13})$/;
//     var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

//     let result = input.match(visaRegEx);
//     return result == null ? "invalid" : "valid";
// }

// const param = "4111 1111 1111 1111";

// console.log(output(param));


// Q32: Write a function that checks if a given string is a valid phone number

// const output = (input) => {
//     var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
//     var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
//     var amexpRegEx = /^(?:3[47][0-9]{13})$/;
//     var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

//     let result = input.match(visaRegEx);
//     return result == null ? "invalid" : "valid";
// }

// const param = "4111 1111 1111 1111";

// console.log(output(param));





// Q33: Write a function that returns the sum of all numbers in a given string

// const output = (input) => {
// let toArray = input.split("");
// let filterNumber = toArray.filter((char)=>{return !isNaN(char)});
// let sum = 0;

// for (let index = 0; index < filterNumber.length; index++) {
//     sum+=parseInt(filterNumber[index]);

// }

//     return sum;
// }

// const param = "asa2sa2askdhaks1JSH1AKS1JK";

// console.log(output(param));






// Q34: Write a function that returns the number of words in a given sentence

// const output = (input) => {

//     return input.split(" ").length;
// }

// const param = "amjad saeed saeed saeed saeed saeed saeed saeed saeed saeed saeed saeed";

// console.log(output(param));





// Q35: Write a function that returns the number of lines in a given string

// const output = (input) => {

//     return input.split(/\n/).length;
// }

// const param = "amjad saeed saeed";

// console.log(output(param));





// Q36: Write a function that checks if a given string contains only digits

// const output = (input) => {
// let toArray = input.split("");
// let filterNumber = toArray.filter((char)=>{return isNaN(char)});

//     return typeof filterNumber !== 'undefined' && filterNumber.length === 0 ? true : false;
// }

// const param = "1212";

// console.log(output(param));





// Q37: Write a function that checks if a given string contains only letters

// const output = (input) => {
// let toArray = input.split("");
// let filterNumber = toArray.filter((char)=>{return !isNaN(char)});

//     return typeof filterNumber !== 'undefined' && filterNumber.length === 0 ? true : false;
// }

// const param = "asasasa1";

// console.log(output(param));





// Q38: Write a function that returns the result of number with power

// const output = (input, input2) => {
//     let result = 1;
//     while (input2 > 0) {
//       result *= input;
//       input2--;
//     }
//     return result;
//   };

//   const param = 2;
//   const param2 = 3;

//   console.log(output(param, param2)); // should output 4





// Q39: checks if a given number is a perfect square

// const output = (input) => {
//     // Find the square root of the number
//     const sqrt = Math.sqrt(input);

//     // If the square root is an integer, then the number is a perfect square
//     return sqrt === Math.floor(sqrt);
// };

// const param = 49;

// console.log(output(param)); // should output 4




// Q40: Write a function that returns the largest palindrome in a given string

// const output = (str) => {
//     let largestPalindrome = '';

//   // Loop over every substring in the string
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       const substring = str.slice(i, j);

//       // If the substring is a palindrome and larger than the current largest palindrome, update the largest palindrome
//       if (isPalindrome(substring) && substring.length > largestPalindrome.length) {
//         largestPalindrome = substring;
//       }
//     }
//   }

//   return largestPalindrome;
// };

// function isPalindrome(str) {
//     // Reverse the string and check if it's equal to the original string
//     return str === str.split('').reverse().join('');
//   }

// const param = "abcdeedcba";

// console.log(output(param)); // should output 'abcdeedcba'





// Q41: Write a function that returns the number of occurrences of a given character in a string
// function countOccurrences(str, char) {
//     let count = 0;

//     // Loop over every character in the string
//     for (let i = 0; i < str.length; i++) {
//       // If the character matches the given character, increment the count
//       if (str[i] === char) {
//         count++;
//       }
//     }

//     return count;
//   }

//   // Example usage
//   console.log(countOccurrences('hello', 'l')); // should output 2
//   console.log(countOccurrences('mississippi', 's')); // should output 4




// Q42: Write a function that checks if a given string is a valid date
// function isValidDate(dateString) {
//     // Try to parse the string as a date
//     const date = new Date(dateString);

//     // If the date is not valid or the parsed value is NaN, then the string is not a valid date
//     if (isNaN(date.valueOf()) || date.toString() === 'Invalid Date') {
//       return false;
//     }

//     return true;
//   }

//   // Example usage
//   console.log(isValidDate('2022-03-17')); // should output true
//   console.log(isValidDate('2022-02-30')); // should output false




// Q43: Write a function that checks if a given string is a valid time
// function isValidTime(timeString) {
//     // Split the time string into hours, minutes, and seconds
//     const timeParts = timeString.split(':');

//     // Ensure that there are exactly three parts
//     if (timeParts.length !== 3) {
//       return false;
//     }

//     // Parse the parts as integers
//     const hours = parseInt(timeParts[0], 10);
//     const minutes = parseInt(timeParts[1], 10);
//     const seconds = parseInt(timeParts[2], 10);

//     // Check that the hours, minutes, and seconds are valid
//     if (isNaN(hours) || hours < 0 || hours > 23 ||
//         isNaN(minutes) || minutes < 0 || minutes > 59 ||
//         isNaN(seconds) || seconds < 0 || seconds > 59) {
//       return false;
//     }

//     return true;
//   }

//   // Example usage
//   console.log(isValidTime('12:34:56')); // should output true
//   console.log(isValidTime('24:00:00')); // should output false




// Q44: Write a function that checks if a given string is a valid time  

// const output = (input) => {
//     return input.toString(16)
// };

// const param = 49;

// console.log(output(param)); // should output 4



// Q45: Write a function that returns the largest number that can be formed from an array of integers  
// function largestNumberFromArray(nums) {
//     // Convert all numbers to strings
//     const stringNums = nums.map(num => num.toString());

//     // Sort the strings in descending order
//     stringNums.sort((a, b) => {
//       const ab = a + b;
//       const ba = b + a;
//       return ba.localeCompare(ab);
//     });

//     // Join the strings into a single number and parse it as an integer
//     const largestNum = parseInt(stringNums.join(''));

//     return largestNum;
//   }

//   // Example usage
//   console.log(largestNumberFromArray([10, 2])); // should output 210
//   console.log(largestNumberFromArray([3, 30, 34, 5, 9])); // should output 9534330




// Q45: Write a function that returns the smallest number that can be formed from an array of integers
// function smallestNumberFromArray(nums) {
//     // Convert all numbers to strings
//     const stringNums = nums.map(num => num.toString());

//     // Sort the strings in ascending order
//     stringNums.sort((a, b) => {
//       const ab = a + b;
//       const ba = b + a;
//       return ab.localeCompare(ba);
//     });

//     // Join the strings into a single number and parse it as an integer
//     const smallestNum = parseInt(stringNums.join(''));

//     return smallestNum;
//   }

//   // Example usage
//   console.log(smallestNumberFromArray([10, 2])); // should output 210
//   console.log(smallestNumberFromArray([3, 30, 34, 5, 9])); // should output 303459




// Q46: Write a function that checks if a given number is a power of two
// const output = (input) => {
//     const sqrt = Math.sqrt(input);

//     return sqrt === Math.floor(sqrt);
// };

// const param = 5;

// console.log(output(param)); // should output 4




// Q47: Write a function that checks if a given number is a power of three
// const output = (input, input2) => {
//     let result = 1;
//     let base = 2;
//     while (input2 > 0) {
//       result *= base;
//       input2--;
//     }
//     return result === input;
//   };

//   const param = 9;
//   const param2 = 3;

//   console.log(output(param, param2));




// Q48: Write a function that returns the sum of all multiples of 3 and 5 below a given number
// const output = (input) => {
//     let result = 0;
//     for (let index = 0; index < input.length; index++) {
//         if (input[index] % 3 === 0 || input[index] % 5 === 0) {
//             result += input[index];
//         }

//     }

//     return result;
// };

// const param = [3, 5, 6, 9, 10, 12, 15, 18, 20];
// console.log(output(param));




// Q49: Write a function that returns the largest sum of a contiguous subarray in an array of integers
// const output = (input) => {
//     let currentSum = input[0]; // set currentSum to the first element
//     let result = input[0]; // set result to the first element
  
//     for (let i = 1; i < input.length; i++) { // start iterating from the second element
//       currentSum = Math.max(input[i], currentSum + input[i]); // update currentSum to the maximum of the current element and the sum of the current element and the previous sum
//       result = Math.max(result, currentSum); // update result to the maximum of the previous result and the current sum
//     }
  
//     return result;
// };

// const param = [-2, -3, 4, -1, -2, 1, 5, -3];
// console.log(output(param)); 




// Q50: Write a function that returns the largest sum of a contiguous subarray in an array of integers
// const output = (input) => {
//     let currentSum = input[0]; // set currentSum to the first element
//     let result = input[0]; // set result to the first element
  
//     for (let i = 1; i < input.length; i++) { // start iterating from the second element
//       currentSum = Math.max(input[i], currentSum + input[i]); // update currentSum to the maximum of the current element and the sum of the current element and the previous sum
//       result = Math.max(result, currentSum); // update result to the maximum of the previous result and the current sum
//     }
  
//     return result;
// };

// const param = [-2, -3, 4, -1, -2, 1, 5, -3];
// console.log(output(param));