# JavaScript Coding Interview Questions

## Description

JavaScript Coding Interview Questions for small-medium companies.

## Usage

### Q1: Write a function that checks if a number is even or odd

```javascript
const output = (input) => {
  return Math.floor(input) % 2 == 0 ? "even" : "odd";
};

const param = 12.2;

console.log(output(param));
```

### Q2: Write a function that calculates the sum of an array of numbers

```javascript
const output = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum;
};

const param = [1, 2, 4];

console.log(output(param));
```

### Q3: Write a function that returns the average of an array of numbers

```javascript
const output = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum / input.length;
};

const param = [1, 2, 3];

console.log(output(param));
```

### Q4: Write a function that calculates the factorial of a given number

```javascript
const output = (input) => {
  let factorial = 1;

  while (input > 0) {
    factorial *= input;
    input--;
  }

  return factorial;
};

const param = 6;

console.log(output(param));
```

### Q5: Write a function that checks if a given string is a valid email address

```javascript
const output = (input) => {
  let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let result = input.match(pattern);
  return result == null ? "invalid" : "valid";
};

const param = "amjadsaeed@gmail.com";

console.log(output(param));
```

### Q6: Write a function that checks if a given string is a valid URL

```javascript
const output = (input) => {
  let pattern =
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/;
  let result = input.match(pattern);
  return result == null ? "invalid" : "valid";
};

const param = "https://stackoverflow";

console.log(output(param));
```

### Q7: Write a function that converts a string to a title case

```javascript
const output = (input) => {
  let result = [];
  input.split(" ").map((item) => {
    result.push(item.at(0).toUpperCase() + item.toLowerCase().slice(1));
  });
  return result.join(" ");
  // return input.split(" ");
};

const param = "amjad saEEd";

console.log(output(param));
```

### Q8: Write a function that returns the nth Fibonacci number

```javascript
const output = (input) => {
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 0;
  for (i = 0; i < input; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
};

const param = 5;

console.log(output(param));
```

### Q9: Write a function that checks if a given number is prime

```javascript
const output = (input) => {
  let result;
  for (let i = 2; i * i <= input; i++) {
    return input % i == 0 ? false : true;
  }
  // return result;
};

const param = 11;

console.log(output(param));
```

### Q10: Write a function that checks if a given year is a leap year

```javascript
const output = (input) => {
  return (input % 4 == 0 && input % 100 != 0) || input % 400 == 0
    ? "LeapYear"
    : "Not Leap Year";
};

const param = 2032;

console.log(output(param));
```

### Q11: Write a function that finds the maximum value in an array

```javascript
const output = (input) => {
  let sortedArray;
  sortedArray = input.sort((a, b) => {
    return a - b;
  });

  return sortedArray[input.length - 1];
};

const param = [2, 5, 3, 5, 7, 3, 67, 9];
console.log(output(param));
```

### Q12: Write a function that finds the minimum value in an array

```javascript
const output = (input) => {
  let sortedArray;
  sortedArray = input.sort((a, b) => {
    return a - b;
  });

  return sortedArray[0];
};

const param = [2, 5, 3, 5, 7, 3, 67, 9];
console.log(output(param));
```

### Q13: Write a function that finds the second-largest number in an array

```javascript
const output = (input) => {
  let sortedArray;
  sortedArray = input.sort((a, b) => {
    return a - b;
  });

  return sortedArray[input.length - 2];
};

const param = [2, 5, 3, 5, 7, 3, 67, 9];
console.log(output(param));
```

### Q14: Write a function that reverses the order of words in a sentence

```javascript
const output = (input) => {
  return input.split(" ").reverse().join(" ");
};

const param = "saeed amjad";
console.log(output(param));
```

### Q15: Write a function that reverses the words in a sentence

```javascript
const output = (input) => {
  // Split the sentence into words
  const words = input.split(" ");

  // Reverse the characters of each word
  const reversedWords = words.map((word) => word.split("").reverse().join(""));

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
};

const param = "1234 1234";
console.log(output(param)); // Output: ["deesa", "djam", ""]
```

### Q16: Write a function that counts the number of vowels in a given string

```javascript
const output = (input) => {
  let removeSpaces = input.replace(/\s/g, "");
  let vowels = ["a", "e", "i", "o", "u", "s"];
  let countVowels = 0;

  for (let i = 0; i < vowels.length; i++) {
    if (vowels.includes(removeSpaces[i])) {
      countVowels++;
    }
  }
  return removeSpaces;
};

const param =
  "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et ";
console.log(output(param));
```

### Q17: Write a function that checks if a given string is a palindrome

```javascript
const output = (input) => {
  return input.split("").reverse().join("") == input ? true : false;
};

const param = "111";
console.log(output(param));
```

### Q18: Write a function that returns the sum of all even numbers in an array

```javascript
const output = (input) => {
  let sum = 0;

  for (let index = 0; index < input.length; index++) {
    if (input[index] % 2 == 0) {
      sum += input[index];
    }
  }
  return sum;
};

const param = [1, 3, 2, 2];
console.log(output(param));
```

### Q19: Write a function that returns the sum of all odd numbers in an array

```javascript
const output = (input) => {
  let sum = 0;

  for (let index = 0; index < input.length; index++) {
    if (input[index] % 2 != 0) {
      sum += input[index];
    }
  }
  return sum;
};

const param = [3, 3, 2, 2];
console.log(output(param));
```

### Q20: Write a function that sorts an array of numbers in ascending order

```javascript
const output = (input) => {
  return input.sort((a, b) => {
    return a - b;
  });
};

const param = [3, 3, 2, 2];
console.log(output(param));
```

### Q21: Write a function that sorts an array of numbers in descending order

```javascript
const output = (input) => {
  return input.sort((a, b) => {
    return b - a;
  });
};

const param = [3, 3, 2, 2];
console.log(output(param));
```

### Q22: Write a function that returns the length of the longest word in a sentence

```javascript
const output = (input) => {
  let toArray = input.split(" ");
  let longestLen = "";
  let currentLen = 0;

  for (let i = 0; i < toArray.length; i++) {
    currentLen = toArray[i].length;
    if (currentLen > longestLen.length) {
      longestLen = toArray[i];
    }
  }

  return longestLen;
};

const param = "length of the longest word in a sentence sentencesentence";
console.log(output(param));
```

### Q23: Write a function that finds the first non-repeating character in a given string

```javascript
const output = (input) => {
  let toArray = input.split("");
  let nonRepeating = [];

  for (let index = 0; index < input.length; index++) {
    if (!nonRepeating.includes(input[index])) {
      nonRepeating.push(input[index]);
    } else {
      nonRepeating = nonRepeating.filter((char) => char !== input[index]);
    }
  }

  return nonRepeating[0];
};

const param = "lenegtahtl";
console.log(output(param));
```

### Q24: Write a function that checks if two strings are anagrams

```javascript
const output = (input, input2) => {
  let count = 0;

  let toArray = input.split("");

  for (let index = 0; index < input2.length; index++) {
    if (toArray.includes(input2[index])) {
      count++;
    }
  }

  return count == input2.length ? "anagram" : "not anagram";
};

const param = "listen";
const param2 = "silent";

console.log(output(param, param2));
```

### Q25: Write a function that removes duplicates from an array of numbers

```javascript
const output = (input) => {
  return [...new Set(input)];
};

const param = [1, 1, 2];

console.log(output(param));
```

### Q26: Write a function that removes duplicates from an array of numbers

```javascript
const output = (input) => {
  let uniq = [];

  for (let i = 0; i < input.length; i++) {
    if (!uniq.includes(input[i])) {
      uniq.push(input[i]);
    }
  }

  return uniq;
};

const param = [
  1, 1, 2, 2, 5, 32, 5, 7, 6, 3, 1, 7, 5, 3, 5, 8, 90, 8, 5, 3, 2, 2,
];

console.log(output(param));
```

### Q27: Write a function that finds the missing number in an array of numbers

```javascript
const output = (input) => {
  let missingNumbers = [];
  let range = Math.max(...input);

  for (let index = 1; index <= range; index++) {
    if (!input.includes(index)) {
      missingNumbers.push(index);
    }
  }

  return missingNumbers;
};

const param = [4, 1, 4, 10];
console.log(output(param)); // should output [2, 3, 5, 6, 7, 8, 9]
```

### Q28: Write a function that returns the reverse of a given string

```javascript
const output = (input) => {
  let reverseString = [];

  for (let index = input.length - 1; index >= 0; index--) {
    reverseString.push(input[index]);
  }

  return reverseString.join("");
};

const param = "amjad";
console.log(output(param));
```

### Q29: Write a function that converts a number to its binary representation

```javascript
const output = (input) => {
  return (input >>> 0).toString(2);
};

const param = -1;
console.log(output(param));
```

### Q30: Write a function that checks if a given string is a valid phone number

```javascript
const output = (input) => {
  let pattern = /^((\+)33|0)[1-9](\d{2}){4}$/;
  let result = input.match(pattern);
  return result == null ? "invalid" : "valid";
};

const param = "+33777777777";

console.log(output(param));
```

### Q31: Write a function that checks if a given string is a valid phone number

```javascript
const output = (input) => {
  var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  var amexpRegEx = /^(?:3[47][0-9]{13})$/;
  var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

  let result = input.match(visaRegEx);
  return result == null ? "invalid" : "valid";
};

const param = "4111 1111 1111 1111";

console.log(output(param));
```

### Q32: Write a function that checks if a given string is a valid phone number

```javascript
const output = (input) => {
  var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  var amexpRegEx = /^(?:3[47][0-9]{13})$/;
  var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

  let result = input.match(visaRegEx);
  return result == null ? "invalid" : "valid";
};

const param = "4111 1111 1111 1111";

console.log(output(param));
```

### Q33: Write a function that returns the sum of all numbers in a given string

```javascript
const output = (input) => {
  let toArray = input.split("");
  let filterNumber = toArray.filter((char) => {
    return !isNaN(char);
  });
  let sum = 0;

  for (let index = 0; index < filterNumber.length; index++) {
    sum += parseInt(filterNumber[index]);
  }

  return sum;
};

const param = "asa2sa2askdhaks1JSH1AKS1JK";

console.log(output(param));
```

### Q34: Write a function that returns the number of words in a given sentence

```javascript
const output = (input) => {
  return input.split(" ").length;
};

const param =
  "amjad saeed saeed saeed saeed saeed saeed saeed saeed saeed saeed saeed";

console.log(output(param));
```

### Q35: Write a function that returns the number of lines in a given string

```javascript
const output = (input) => {
  return input.split(/\n/).length;
};

const param = "amjad saeed saeed";

console.log(output(param));
```

### Q36: Write a function that checks if a given string contains only digits

```javascript
const output = (input) => {
  let toArray = input.split("");
  let filterNumber = toArray.filter((char) => {
    return isNaN(char);
  });

  return typeof filterNumber !== "undefined" && filterNumber.length === 0
    ? true
    : false;
};

const param = "1212";

console.log(output(param));
```

### Q37: Write a function that checks if a given string contains only letters

```javascript
const output = (input) => {
  let toArray = input.split("");
  let filterNumber = toArray.filter((char) => {
    return !isNaN(char);
  });

  return typeof filterNumber !== "undefined" && filterNumber.length === 0
    ? true
    : false;
};

const param = "asasasa1";

console.log(output(param));
```

### Q38: Write a function that returns the result of number with power

```javascript
const output = (input, input2) => {
  let result = 1;
  while (input2 > 0) {
    result *= input;
    input2--;
  }
  return result;
};

const param = 2;
const param2 = 3;

console.log(output(param, param2)); // should output 4
```

### Q39: checks if a given number is a perfect square

```javascript
const output = (input) => {
  // Find the square root of the number
  const sqrt = Math.sqrt(input);

  // If the square root is an integer, then the number is a perfect square
  return sqrt === Math.floor(sqrt);
};

const param = 49;

console.log(output(param)); // should output 4
```

### Q40: Write a function that returns the largest palindrome in a given string

```javascript
const output = (str) => {
  let largestPalindrome = "";

  // Loop over every substring in the string
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j);

      // If the substring is a palindrome and larger than the current largest palindrome, update the largest palindrome
      if (
        isPalindrome(substring) &&
        substring.length > largestPalindrome.length
      ) {
        largestPalindrome = substring;
      }
    }
  }

  return largestPalindrome;
};

function isPalindrome(str) {
  // Reverse the string and check if it's equal to the original string
  return str === str.split("").reverse().join("");
}

const param = "abcdeedcba";

console.log(output(param)); // should output 'abcdeedcba'
```

### Q41: Write a function that returns the number of occurrences of a given character in a string

```javascript
function countOccurrences(str, char) {
  let count = 0;

  // Loop over every character in the string
  for (let i = 0; i < str.length; i++) {
    // If the character matches the given character, increment the count
    if (str[i] === char) {
      count++;
    }
  }

  return count;
}

// Example usage
console.log(countOccurrences("hello", "l")); // should output 2
console.log(countOccurrences("mississippi", "s")); // should output 4
```

### Q42: Write a function that checks if a given string is a valid date

```javascript
function isValidDate(dateString) {
  // Try to parse the string as a date
  const date = new Date(dateString);

  // If the date is not valid or the parsed value is NaN, then the string is not a valid date
  if (isNaN(date.valueOf()) || date.toString() === "Invalid Date") {
    return false;
  }

  return true;
}

// Example usage
console.log(isValidDate("2022-03-17")); // should output true
console.log(isValidDate("2022-02-30")); // should output false
```

### Q43: Write a function that checks if a given string is a valid time

```javascript
function isValidTime(timeString) {
  // Split the time string into hours, minutes, and seconds
  const timeParts = timeString.split(":");

  // Ensure that there are exactly three parts
  if (timeParts.length !== 3) {
    return false;
  }

  // Parse the parts as integers
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  const seconds = parseInt(timeParts[2], 10);

  // Check that the hours, minutes, and seconds are valid
  if (
    isNaN(hours) ||
    hours < 0 ||
    hours > 23 ||
    isNaN(minutes) ||
    minutes < 0 ||
    minutes > 59 ||
    isNaN(seconds) ||
    seconds < 0 ||
    seconds > 59
  ) {
    return false;
  }

  return true;
}

// Example usage
console.log(isValidTime("12:34:56")); // should output true
console.log(isValidTime("24:00:00")); // should output false
```

### Q44: Write a function that checks if a given string is a valid time

```javascript
const output = (input) => {
  return input.toString(16);
};

const param = 49;

console.log(output(param)); // should output 4
```

### Q45: Write a function that returns the largest number that can be formed from an array of integers

```javascript
function largestNumberFromArray(nums) {
  // Convert all numbers to strings
  const stringNums = nums.map((num) => num.toString());

  // Sort the strings in descending order
  stringNums.sort((a, b) => {
    const ab = a + b;
    const ba = b + a;
    return ba.localeCompare(ab);
  });

  // Join the strings into a single number and parse it as an integer
  const largestNum = parseInt(stringNums.join(""));

  return largestNum;
}

// Example usage
console.log(largestNumberFromArray([10, 2])); // should output 210
console.log(largestNumberFromArray([3, 30, 34, 5, 9])); // should output 9534330
```

### Q45: Write a function that returns the smallest number that can be formed from an array of integers

```javascript
function smallestNumberFromArray(nums) {
  // Convert all numbers to strings
  const stringNums = nums.map((num) => num.toString());

  // Sort the strings in ascending order
  stringNums.sort((a, b) => {
    const ab = a + b;
    const ba = b + a;
    return ab.localeCompare(ba);
  });

  // Join the strings into a single number and parse it as an integer
  const smallestNum = parseInt(stringNums.join(""));

  return smallestNum;
}

// Example usage
console.log(smallestNumberFromArray([10, 2])); // should output 210
console.log(smallestNumberFromArray([3, 30, 34, 5, 9])); // should output 303459
```

### Q46: Write a function that checks if a given number is a power of two

```javascript
const output = (input) => {
  const sqrt = Math.sqrt(input);

  return sqrt === Math.floor(sqrt);
};

const param = 5;

console.log(output(param)); // should output 4
```

### Q47: Write a function that checks if a given number is a power of three

```
const output = (input, input2) => {
    let result = 1;
    let base = 2;
    while (input2 > 0) {
      result *= base;
      input2--;
    }
    return result === input;
  };

  const param = 9;
  const param2 = 3;

  console.log(output(param, param2));
```

### Q48: Write a function that returns the sum of all multiples of 3 and 5 below a given number

```javascript
const output = (input) => {
  let result = 0;
  for (let index = 0; index < input.length; index++) {
    if (input[index] % 3 === 0 || input[index] % 5 === 0) {
      result += input[index];
    }
  }

  return result;
};

const param = [3, 5, 6, 9, 10, 12, 15, 18, 20];
console.log(output(param));
```

### Q49: Write a function that returns the largest sum of a contiguous subarray in an array of integers

```javascript
const output = (input) => {
  let currentSum = input[0]; // set currentSum to the first element
  let result = input[0]; // set result to the first element

  for (let i = 1; i < input.length; i++) {
    // start iterating from the second element
    currentSum = Math.max(input[i], currentSum + input[i]); // update currentSum to the maximum of the current element and the sum of the current element and the previous sum
    result = Math.max(result, currentSum); // update result to the maximum of the previous result and the current sum
  }

  return result;
};

const param = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(output(param));
```

### Q50: Write a function that returns the largest sum of a contiguous subarray in an array of integers

```javascript
const output = (input) => {
  let currentSum = input[0]; // set currentSum to the first element
  let result = input[0]; // set result to the first element

  for (let i = 1; i < input.length; i++) {
    // start iterating from the second element
    currentSum = Math.max(input[i], currentSum + input[i]); // update currentSum to the maximum of the current element and the sum of the current element and the previous sum
    result = Math.max(result, currentSum); // update result to the maximum of the previous result and the current sum
  }

  return result;
};

const param = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(output(param));
```

### Q51: Write a function that checks if a given number is a perfect number

```javascript
function isPerfectNumber(num) {
  if (num < 1) {
    return false;
  }

  let sum = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}
```

### Q54: Write a function that returns the number of pairs of integers in an array whose sum is equal to a given number

```javascript
function countPairs(arr, sum) {
  let count = 0; // initialize count variable to 0
  let hashTable = {}; // create empty object to act as hash table

  for (let i = 0; i < arr.length; i++) {
    // loop through array
    let complement = sum - arr[i]; // calculate the complement for each element

    if (hashTable[complement]) {
      // if complement is already in hash table
      count += hashTable[complement]; // increment count by the number of times complement appears in array
    }

    if (!hashTable[arr[i]]) {
      // if element not in hash table yet
      hashTable[arr[i]] = 0; // add element to hash table with value of 0
    }

    hashTable[arr[i]]++; // increment count for current element in hash table
  }

  return count; // return final count
}
```

### Q55: Write a function that checks if a given string is a valid palindrome ignoring cases

```javascript
/**
 * Checks if a given string is a valid palindrome ignoring cases
 * @param {string} str - The string to check
 * @returns {boolean} - True if str is a palindrome, false otherwise
 */
function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Loop through the characters in the string
  for (let i = 0; i < cleanStr.length / 2; i++) {
    // If the characters on either side of the string don't match, return false
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }

  // If we got through the whole loop without returning false, the string is a palindrome
  return true;
}
```

### Q56: Write a function that returns the longest increasing subsequence in an array of integers

```javascript
function longestIncreasingSubsequence(arr) {
  // Initialize an array of length arr.length, where each element is initially 1
  const lisLengths = new Array(arr.length).fill(1);

  // Loop through each element in the array
  for (let i = 1; i < arr.length; i++) {
    // Loop through all the previous elements
    for (let j = 0; j < i; j++) {
      // If the current element is greater than the previous element
      if (arr[i] > arr[j]) {
        // Update the length of the longest increasing subsequence ending at the current element
        lisLengths[i] = Math.max(lisLengths[i], lisLengths[j] + 1);
      }
    }
  }

  // Find the maximum length in the lisLengths array
  let maxLength = 0;
  for (let i = 0; i < lisLengths.length; i++) {
    maxLength = Math.max(maxLength, lisLengths[i]);
  }

  // Initialize an empty array to store the longest increasing subsequence
  const lis = [];

  // Loop through each element in the array, starting from the end
  for (let i = arr.length - 1; i >= 0; i--) {
    // If the current element is part of the longest increasing subsequence
    if (lisLengths[i] === maxLength) {
      // Add it to the lis array and decrement the maxLength
      lis.unshift(arr[i]);
      maxLength--;
    }
  }

  // Return the longest increasing subsequence
  return lis;
}
```

### Q57: Write a function that returns the length of the longest palindromic subsequence in a string

```javascript
/**
 * Returns the length of the longest palindromic subsequence in a string.
 * @param {string} str - The input string.
 * @returns {number} The length of the longest palindromic subsequence in the input string.
 */
function longestPalindromicSubsequence(str) {
  const n = str.length;
  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(0)); // initialize a 2D array of size n x n

  // initialize the diagonal elements with 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // fill the remaining upper half of the dp table
  for (let cl = 2; cl <= n; cl++) {
    for (let i = 0; i < n - cl + 1; i++) {
      const j = i + cl - 1;
      if (str[i] == str[j] && cl == 2) {
        dp[i][j] = 2;
      } else if (str[i] == str[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][n - 1]; // the length of the longest palindromic subsequence is stored in the top-right corner of the dp table
}
```

### Q58: Write a function that returns the minimum number of steps required to transform one string to another, where a step is defined as either adding, deleting or changing a character in the first string

```javascript
/**
 * Calculates the minimum number of steps required to transform one string to another.
 * A step is defined as either adding, deleting or changing a character in the first string.
 *
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {number} - The minimum number of steps required to transform str1 to str2.
 */
function minStepsToTransform(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array to store the minimum number of steps required to transform the first i characters of str1 to the first j characters of str2.
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // Initialize the first row and column of the dp array.
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // Fill in the rest of the dp array.
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // If the i-th character of str1 is the same as the j-th character of str2, we don't need to do anything.
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Otherwise, we need to find the minimum of three operations:
        // 1. Replace the i-th character of str1 with the j-th character of str2.
        // 2. Delete the i-th character of str1.
        // 3. Insert the j-th character of str2 into str1.
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j - 1], // Replace operation.
            dp[i - 1][j], // Delete operation.
            dp[i][j - 1] // Insert operation.
          );
      }
    }
  }

  // The final answer is the value at the bottom-right corner of the dp array.
  return dp[m][n];
}
```

### Q59: Write a function that checks if a given number is a Harshad number

```javascript
function isHarshadNumber(num) {
  // Convert the number to a string and split it into an array of digits
  const digits = num.toString().split("");

  // Calculate the sum of the digits
  const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);

  // Check if the number is divisible by the sum of its digits
  return num % sum === 0;
}
```

### Q60: Write a function that returns the number of ways to climb a staircase of n steps, where a person can climb either 1, 2 or 3 steps at a time

```javascript
// This function calculates the number of ways to climb a staircase of n steps,
// where a person can climb either 1, 2 or 3 steps at a time.
function countWaysToClimbStairs(n) {
  // Create an array to store the number of ways to climb the first few steps.
  const waysToClimb = [1, 1, 2];

  // If n is less than or equal to 2, return the corresponding number of ways to climb.
  if (n <= 2) {
    return waysToClimb[n];
  }

  // Calculate the number of ways to climb each step up to n.
  for (let i = 3; i <= n; i++) {
    // The number of ways to climb the current step is the sum of the number of ways
    // to climb the previous three steps.
    const currentWaysToClimb =
      waysToClimb[i - 1] + waysToClimb[i - 2] + waysToClimb[i - 3];

    // Add the number of ways to climb the current step to the array.
    waysToClimb.push(currentWaysToClimb);
  }

  // Return the number of ways to climb the last step.
  return waysToClimb[n];
}
```

### Q61: Write a function that checks if a given string is a valid parentheses sequence

```javascript
function isValidParentheses(str) {
  // Create a stack to store opening parentheses
  const stack = [];

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // If the character is an opening parenthesis, push it onto the stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      // If the character is a closing parenthesis, pop the top element from the stack
      const top = stack.pop();

      // If the popped element doesn't match the corresponding opening parenthesis, return false
      if (
        (top === "(" && char !== ")") ||
        (top === "{" && char !== "}") ||
        (top === "[" && char !== "]")
      ) {
        return false;
      }
    }
  }

  // If the stack is not empty, return false
  if (stack.length !== 0) {
    return false;
  }

  // Otherwise, the parentheses sequence is valid
  return true;
}
```

### Q62: Write a function that returns the number of ways to arrange n distinct objects in a circle

```javascript
// This function returns the number of ways to arrange n distinct objects in a circle
function circlePermutations(n) {
  // Calculate the factorial of n using a recursive function
  function factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  // Calculate the number of circular permutations using the formula (n-1)!
  return factorial(n - 1);
}
```

### Q63: Write a function that checks if a given number is a narcissistic number

```javascript
function isNarcissisticNumber(number) {
  // convert number to string to get its length
  const numberStr = number.toString();
  const length = numberStr.length;

  // initialize sum to 0
  let sum = 0;

  // loop through each digit in the number
  for (let i = 0; i < length; i++) {
    // get the i-th digit and convert it to a number
    const digit = Number(numberStr[i]);
    // add the i-th digit raised to the power of length to the sum
    sum += Math.pow(digit, length);
  }

  // if the sum equals the original number, it's a narcissistic number
  return sum === number;
}
```

### Q64: Write a function that returns the length of the longest common subsequence in two given strings

```javascript
// This function takes two strings as input and returns the length of the longest common subsequence
function longestCommonSubsequenceLength(str1, str2) {
  // First, we create a two-dimensional array to store the lengths of the longest common subsequences
  const lcs = Array(str1.length + 1)
    .fill(null)
    .map(() => Array(str2.length + 1).fill(null));

  // Then, we loop through the characters of both strings and fill in the array
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      // If either string is empty, the length of the common subsequence is 0
      if (i === 0 || j === 0) {
        lcs[i][j] = 0;

        // If the current characters match, we can extend the previous common subsequence
      } else if (str1[i - 1] === str2[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;

        // Otherwise, we take the maximum of the two previous common subsequences
      } else {
        lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
      }
    }
  }

  // The length of the longest common subsequence is stored in the bottom-right cell of the array
  return lcs[str1.length][str2.length];
}

// Example usage:
console.log(longestCommonSubsequenceLength("abcde", "ace")); // Output: 3
```

### Q66: Write a function that returns the number of ways to split a given string into substrings such that each substring is a palindrome

```javascript
// This function returns the number of ways to split a given string
// into substrings such that each substring is a palindrome.
function countPalindromeSubstrings(str) {
  // Initialize a variable to keep track of the count of palindrome substrings.
  let count = 0;

  // Loop through each possible substring in the string.
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      // Get the current substring.
      let substr = str.slice(i, j + 1);

      // Check if the substring is a palindrome.
      if (isPalindrome(substr)) {
        // If the substring is a palindrome, increment the count.
        count++;
      }
    }
  }

  // Return the count of palindrome substrings.
  return count;
}

// This helper function checks if a given string is a palindrome.
function isPalindrome(str) {
  // Loop through the string from both ends, comparing each character.
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      // If any characters don't match, the string is not a palindrome.
      return false;
    }
  }

  // If all characters match, the string is a palindrome.
  return true;
}
```

### Q67: Write a function to reverse a string.

```javascript
function reverseString(str) {
  // convert string to array of characters
  let arr = str.split("");
  // reverse the order of the characters in the array
  arr.reverse();
  // convert the array back to a string
  let reversedStr = arr.join("");
  // return the reversed string
  return reversedStr;
}
```

### Q68: Write a function to determine whether a string is a palindrome

```javascript
/**
 * Checks whether a given string is a palindrome.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - `true` if the string is a palindrome, `false` otherwise.
 */
function isPalindrome(str) {
  // Convert the string to lowercase and remove any non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Iterate through the first half of the cleaned string
  for (let i = 0; i < cleanStr.length / 2; i++) {
    // Check whether the current character matches its counterpart on the other side of the string
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      // If not, the string is not a palindrome
      return false;
    }
  }

  // If we made it through the loop without returning false, the string is a palindrome
  return true;
}
```

### Q69: Write a function to find the minimum value in an array

```javascript
function findMin(arr) {
  // Set the initial minimum value to the first element in the array
  let min = arr[0];

  // Loop through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // If the current element is less than the current minimum value, update the minimum value
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  // Return the minimum value
  return min;
}
```

### Q70: Write a function to determine whether two arrays contain the same elements

```javascript
function arraysEqual(arr1, arr2) {
  // if the arrays have different lengths, they cannot be equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  // sort both arrays so that we can compare them element by element
  arr1.sort();
  arr2.sort();

  // compare each element of the two arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // if all elements are equal, the arrays are equal
  return true;
}
```

### Q71: Write a function to sort an array of integers in ascending order.

```javascript
function sortAscending(arr) {
  // Step 1: Use the Array.prototype.sort() method to sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Step 2: Return the sorted array
  return arr;
}
```

### Q73: Write a function to merge two sorted arrays into a single sorted array.

```javascript
function mergeSortedArrays(arr1, arr2) {
  // Create an empty array to store the merged result
  let mergedArray = [];

  // Initialize two pointers, one for each array
  let pointer1 = 0;
  let pointer2 = 0;

  // Compare elements from both arrays and add the smaller element to the merged array
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] <= arr2[pointer2]) {
      mergedArray.push(arr1[pointer1]);
      pointer1++;
    } else {
      mergedArray.push(arr2[pointer2]);
      pointer2++;
    }
  }

  // Add any remaining elements from the first array
  while (pointer1 < arr1.length) {
    mergedArray.push(arr1[pointer1]);
    pointer1++;
  }

  // Add any remaining elements from the second array
  while (pointer2 < arr2.length) {
    mergedArray.push(arr2[pointer2]);
    pointer2++;
  }

  // Return the merged array
  return mergedArray;
}

// Test the function
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const merged = mergeSortedArrays(arr1, arr2);
console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

### Q74: Write a function to find the median value of an array.

```javascript
/**
 * Function to find the median value of an array.
 * @param {Array} arr - The input array of numbers.
 * @returns {number|null} - The median value of the array, or null if the array is empty.
 */
function findMedian(arr) {
  if (arr.length === 0) {
    return null; // Return null for an empty array
  }

  const sortedArr = arr.slice().sort((a, b) => a - b); // Create a sorted copy of the array

  if (sortedArr.length % 2 === 0) {
    // For arrays with an even number of elements
    const midIndex = sortedArr.length / 2;
    return (sortedArr[midIndex - 1] + sortedArr[midIndex]) / 2; // Average the two middle values
  } else {
    // For arrays with an odd number of elements
    const midIndex = Math.floor(sortedArr.length / 2);
    return sortedArr[midIndex]; // Return the middle value
  }
}
```

### Q75: Write a function to calculate the sum of all elements in an array.

```javascript
/**
 * Calculates the sum of all elements in an array.
 * @param {number[]} arr - The array to calculate the sum of.
 * @returns {number} The sum of all elements in the array.
 */
function calculateSum(arr) {
  let sum = 0; // Initialize the sum variable to 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add each element to the sum
  }
  return sum; // Return the calculated sum
}
```

### Q76: Write a function to find the kth largest element in an array.

```javascript
function findKthLargest(arr, k) {
  // Sort the array in descending order
  arr.sort((a, b) => b - a);

  // Return the kth largest element
  return arr[k - 1];
}
```

### Q77: Write a function to convert a binary number to a decimal number

```javascript
/**
 * Converts a binary number to a decimal number.
 * @param {string} binary - The binary number to convert.
 * @returns {number} The decimal equivalent of the binary number.
 */
function binaryToDecimal(binary) {
  // Check if the input is a valid binary number
  if (!/^[01]+$/.test(binary)) {
    throw new Error("Invalid binary number");
  }

  // Reverse the binary string to start from the least significant bit
  const reversedBinary = binary.split("").reverse().join("");

  let decimal = 0;
  for (let i = 0; i < reversedBinary.length; i++) {
    const bit = parseInt(reversedBinary[i]);
    // Add the decimal value of each bit to the result
    decimal += bit * Math.pow(2, i);
  }

  return decimal;
}

// Example usage
const binaryNumber = "101010";
const decimalNumber = binaryToDecimal(binaryNumber);
console.log(decimalNumber); // Output: 42
```

### Q81: Write a function to implement a stack using an array.

```javascript
// Create a class called Stack
class Stack {
  constructor() {
    // Initialize an empty array to store the stack elements
    this.stack = [];
  }

  // Function to add an element to the top of the stack
  push(element) {
    // Add the element to the end of the array
    this.stack.push(element);
  }

  // Function to remove and return the topmost element from the stack
  pop() {
    // Check if the stack is empty
    if (this.isEmpty()) {
      return "Stack is empty.";
    }

    // Remove and return the last element from the array
    return this.stack.pop();
  }

  // Function to return the topmost element in the stack without removing it
  peek() {
    // Check if the stack is empty
    if (this.isEmpty()) {
      return "Stack is empty.";
    }

    // Return the last element from the array
    return this.stack[this.stack.length - 1];
  }

  // Function to check if the stack is empty
  isEmpty() {
    // Return true if the stack length is 0, indicating an empty stack
    return this.stack.length === 0;
  }

  // Function to return the size of the stack
  size() {
    // Return the length of the stack array
    return this.stack.length;
  }

  // Function to print the elements of the stack
  print() {
    // Check if the stack is empty
    if (this.isEmpty()) {
      console.log("Stack is empty.");
    } else {
      // Iterate over the stack array and print each element
      for (let i = this.stack.length - 1; i >= 0; i--) {
        console.log(this.stack[i]);
      }
    }
  }
}

// Create an instance of the Stack class
const stack = new Stack();

// Example usage:
stack.push(5); // Add 5 to the stack
stack.push(10); // Add 10 to the stack
console.log(stack.peek()); // Output: 10 (topmost element)
console.log(stack.size()); // Output: 2 (number of elements in the stack)
stack.pop(); // Remove and return the topmost element from the stack
console.log(stack.size()); // Output: 1
stack.print(); // Output: 5
```

### Q82: Write a function to implement a queue using an array.

```javascript
// Queue class
class Queue {
  constructor() {
    this.items = []; // Initialize an empty array to store the queue elements
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element); // Push the element to the end of the array
  }

  // Remove an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow"; // If the queue is empty, return "Underflow"
    }
    return this.items.shift(); // Remove and return the first element of the array
  }

  // Get the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "No elements in the queue"; // If the queue is empty, return a message
    }
    return this.items[0]; // Return the first element of the array
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0; // Return true if the array length is 0, indicating an empty queue
  }

  // Get the size of the queue
  size() {
    return this.items.length; // Return the number of elements in the array
  }

  // Print the elements of the queue
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str); // Print the elements of the queue
  }
}

// Example usage:
const queue = new Queue(); // Create a new instance of the Queue class
queue.enqueue(1); // Add elements to the queue
queue.enqueue(2);
queue.enqueue(3);
queue.printQueue(); // Print the elements of the queue: 1 2 3
console.log(queue.front()); // Print the front element of the queue: 1
console.log(queue.dequeue()); // Remove and return the first element of the queue: 1
console.log(queue.size()); // Print the size of the queue: 2
console.log(queue.isEmpty()); // Check if the queue is empty: false
```

### Q84: Write a function to find the intersection of two arrays.

```javascript
// Function to find the intersection of two arrays
function findIntersection(array1, array2) {
  // Create a Set from the first array
  const set1 = new Set(array1);

  // Create an empty array to store the intersection
  const intersection = [];

  // Iterate through the second array
  for (let i = 0; i < array2.length; i++) {
    // Check if the current element exists in the first array
    if (set1.has(array2[i])) {
      // If it does, add it to the intersection array
      intersection.push(array2[i]);
    }
  }

  // Return the intersection array
  return intersection;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = findIntersection(array1, array2);
console.log(result); // Output: [4, 5]
```

### Q85: Write a function to find the intersection of two arrays.

```javascript
// Function to find the intersection of two arrays
function findIntersection(array1, array2) {
  // Create a Set from the first array to remove duplicate elements
  const set1 = new Set(array1);

  // Create a new Set to store the intersection elements
  const intersectionSet = new Set();

  // Iterate over the second array
  for (let i = 0; i < array2.length; i++) {
    // Check if the current element exists in the first Set
    if (set1.has(array2[i])) {
      // If the element is found in both arrays, add it to the intersection set
      intersectionSet.add(array2[i]);
    }
  }

  // Convert the intersection Set back to an array
  const intersectionArray = Array.from(intersectionSet);

  // Return the array containing the intersection elements
  return intersectionArray;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const intersection = findIntersection(array1, array2);
console.log(intersection);
```

### Q87: Write a function to find the longest common prefix of an array of strings.

```javascript
function findLongestCommonPrefix(strings) {
  // Return an empty string if the array is empty
  if (strings.length === 0) {
    return "";
  }

  // Set the initial prefix as the first string in the array
  let prefix = strings[0];

  // Iterate over the remaining strings in the array
  for (let i = 1; i < strings.length; i++) {
    // Keep removing characters from the prefix until it becomes a prefix of the current string
    while (strings[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);

      // If the prefix becomes empty, there is no common prefix among the strings
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}
```

### Q88: Write a function to reverse the order of words in a sentence.

```javascript
function reverseWords(sentence) {
  // Split the sentence into an array of words
  var words = sentence.split(" ");

  // Reverse the array of words
  var reversedWords = words.reverse();

  // Join the reversed words back into a sentence
  var reversedSentence = reversedWords.join(" ");

  // Return the reversed sentence
  return reversedSentence;
}
```

### Q89: Write a function to implement selection sort.

```javascript
function selectionSort(arr) {
  const length = arr.length;

  // Iterate through the entire array
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the remaining unsorted portion of the array
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the current element with the minimum element found
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage:
const arr = [64, 25, 12, 22, 11];
const sortedArr = selectionSort(arr);
console.log(sortedArr);
```

### Q90: Write a function to implement insertion sort.

```javascript
// Function to implement insertion sort
function insertionSort(arr) {
  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Select the current element to be inserted
    let currentValue = arr[i];

    // Find the correct position to insert the current element
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      // Shift elements greater than the current value to the right
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current value at the correct position
    arr[j + 1] = currentValue;
  }

  // Return the sorted array
  return arr;
}

// Example usage:
let numbers = [5, 3, 8, 1, 2, 7];
console.log("Before sorting:", numbers);
numbers = insertionSort(numbers);
console.log("After sorting:", numbers);
```

### Q91: Write a function to implement bubble sort.

```javascript
// Bubble sort implementation
function bubbleSort(arr) {
  const len = arr.length;

  // Iterate over the array
  for (let i = 0; i < len - 1; i++) {
    // Inner loop for comparisons
    for (let j = 0; j < len - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// Usage example
const numbers = [5, 3, 8, 4, 2];
console.log("Before sorting:", numbers);
console.log("After sorting:", bubbleSort(numbers));
```

### Q92: Write a function to implement quicksort.

```javascript
// Function to implement quicksort
function quicksort(arr, low, high) {
  // Base case: If the array has less than 2 elements, it is already sorted
  if (low < high) {
    // Partition the array and get the index of the pivot
    const pivotIndex = partition(arr, low, high);

    // Recursively sort the left and right sub-arrays
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
}

// Function to partition the array
function partition(arr, low, high) {
  // Choose the rightmost element as the pivot
  const pivot = arr[high];

  // Index of the smaller element
  let i = low - 1;

  // Iterate through the array from low to high-1
  for (let j = low; j < high; j++) {
    // If the current element is smaller than or equal to the pivot, swap it with the element at i+1
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  // Swap the pivot with the element at i+1, so that the pivot is in its correct sorted position
  swap(arr, i + 1, high);

  // Return the index of the pivot
  return i + 1;
}

// Function to swap two elements in the array
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Usage example
const array = [5, 2, 9, 1, 3, 7];
quicksort(array, 0, array.length - 1);
console.log(array); // Output: [1, 2, 3, 5, 7, 9]
```

### Q93: Write a function to implement mergesort.

```javascript
// Function to implement Merge Sort
function mergeSort(arr) {
  // Base case: If the array has only one element or is empty, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const middle = Math.floor(arr.length / 2);

  // Split the array into two halves
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort the left and right halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Function to merge two sorted arrays
function merge(left, right) {
  let mergedArray = [];

  // Compare the elements of the left and right arrays and merge them in sorted order
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }

  // Add any remaining elements from the left or right array
  while (left.length) {
    mergedArray.push(left.shift());
  }
  while (right.length) {
    mergedArray.push(right.shift());
  }

  return mergedArray;
}

// Example usage
const arr = [9, 5, 2, 7, 1, 6];
const sortedArray = mergeSort(arr);
console.log(sortedArray);
```

### Q94: Write a function to implement heapsort.

```javascript
// Heapify function to create a max heap
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  const left = 2 * i + 1; // Left child
  const right = 2 * i + 2; // Right child

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest]) largest = left;

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest]) largest = right;

  // If largest is not the root
  if (largest !== i) {
    // Swap arr[i] and arr[largest]
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Main function to perform heap sort
function heapSort(arr) {
  const n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

  // Extract elements from the heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// Usage example
const unsortedArray = [8, 5, 2, 9, 5, 6, 3];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 5, 5, 6, 8, 9]
```

### Q95: Write a function to find the largest sum of any contiguous subarray in an array.

```javascript
// Function to find the largest sum of any contiguous subarray in an array
function findLargestSumSubarray(arr) {
  // Initialize variables to track the maximum sum and current sum
  let maxSum = arr[0];
  let currentSum = arr[0];

  // Iterate through the array starting from the second element
  for (let i = 1; i < arr.length; i++) {
    // Calculate the current sum of the subarray
    currentSum = Math.max(arr[i], currentSum + arr[i]);

    // Update the maximum sum if the current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }

  // Return the largest sum of any contiguous subarray
  return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const largestSum = findLargestSumSubarray(array);
console.log("Largest sum of contiguous subarray:", largestSum);
```

### Q96: Write a function to determine whether a string is an anagram of another string.

```javascript
/**
 * Checks whether a string is an anagram of another string.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {boolean} - True if the strings are anagrams, false otherwise.
 */
function isAnagram(str1, str2) {
  // Convert the strings to lowercase and remove non-alphabetic characters
  str1 = str1.toLowerCase().replace(/[^a-z]/g, "");
  str2 = str2.toLowerCase().replace(/[^a-z]/g, "");

  // Check if the strings have the same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert the strings to arrays and sort them
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";
const result = isAnagram(string1, string2);
console.log(result); // Output: true
```

### Q98: What is the output of below code.

```javascript
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}
```

- 1: Undefined
- 2: ReferenceError
- 3: null
- 4: {model: "Honda", color: "white", year: "2010", country: "UK"}

<details>
  <summary>Answer</summary>

#### Answer: 4

The function declarations are hoisted similar to any variables. So the placement for Vehicle function declaration doesn't make any difference.

</details>

### Q99: What is the output of below code.

```javascript
function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);
```

- 1: 1, undefined and undefined
- 2: ReferenceError: X is not defined
- 3: 1, undefined and number
- 4: 1, number and number

<details>
  <summary>Answer</summary>

#### Answer: 3

Of course the return value of foo() is 1 due to the increment operator. But the statement let x = y = 0 declares a local variable x. Whereas y declared as a global variable accidentally. This statement is equivalent to,

let x;
window.y = 0;
x = window.y;
Since the block scoped variable x is undefined outside of the function, the type will be undefined too. Whereas the global variable y is available outside the function, the value is 0 and type is number.

</details>

### Q100: What is the output of below code.

```javascript
function main() {
  console.log("A");
  setTimeout(function print() {
    console.log("B");
  }, 0);
  console.log("C");
}
main();
```

- 1: A, B and C
- 2: B, A and C
- 3: A and C
- 4: A, C and B

<details>
  <summary>Answer</summary>

#### Answer: 4

The statements order is based on the event loop mechanism. The order of statements follows the below order,

At first, the main function is pushed to the stack.
Then the browser pushes the first statement of the main function( i.e, A's console.log) to the stack, executing and popping out immediately.
But setTimeout statement moved to Browser API to apply the delay for callback.
In the meantime, C's console.log added to stack, executed and popped out.
The callback of setTimeout moved from Browser API to message queue.
The main function popped out from stack because there are no statements to execute
The callback moved from message queue to the stack since the stack is empty.
The console.log for B is added to the stack and display on the console.

</details>

### Q101: What is the output of below equality check.

```javascript
console.log(0.1 + 0.2 === 0.3);
```

- 1: false
- 2: true

<details>
  <summary>Answer</summary>

#### Answer: 1

This is due to the float point math problem. Since the floating point numbers are encoded in binary format, the addition operations on them lead to rounding errors. Hence, the comparison of floating points doesn't give expected results. You can find more details about the explanation here 0.30000000000000004.com/

</details>

### Q102: What is the output of below code.

```javascript
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

- 1: 1function
- 2: 1object
- 3: ReferenceError
- 4: 1undefined

<details>
  <summary>Answer</summary>

#### Answer: 4

The main points in the above code snippets are,

You can see function expression instead function declaration inside if statement. So it always returns true.
Since it is not declared(or assigned) anywhere, f is undefined and typeof f is undefined too.
In other words, it is same as

```javascript
var y = 1;
if ("foo") {
  y += typeof f;
}
console.log(y);
```

Note: It returns 1object for MS Edge browser

</details>

### Q103: What is the output of below code.

```javascript
function foo() {
  return;
  {
    message: "Hello World";
  }
}
console.log(foo());
```

- 1: Hello World
- 2: Object {message: "Hello World"}
- 3: Undefined
- 4: SyntaxError

<details>
  <summary>Answer</summary>
  
#### Answer: 3

The main points in the above code snippets are,

This is a semicolon issue. Normally semicolons are optional in JavaScript. So if there are any statements(in this case, return) missing semicolon, it is automatically inserted immediately. Hence, the function returned as undefined.

Whereas if the opening curly brace is along with the return keyword then the function is going to be returned as expected.

```javascript
function foo() {
  return {
    message: "Hello World",
  };
}
console.log(foo()); // {message: "Hello World"}
```

</details>

### Q104: What is the output of below code.

```javascript
var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);
```

- 1: [empty, 'b', 'c', 'd'], empty, 3
- 2: [null, 'b', 'c', 'd'], empty, 3
- 3: [empty, 'b', 'c', 'd'], undefined, 4
- 4: [null, 'b', 'c', 'd'], undefined, 4

<details>
  <summary>Answer</summary>

#### Answer: 3

The delete operator will delete the object property but it will not reindex the array or change its length. So the number or elements or length of the array won't be changed. If you try to print myChars then you can observe that it doesn't set an undefined value, rather the property is removed from the array. The newer versions of Chrome use empty instead of undefined to make the difference a bit clearer.

</details>

### Q105: What is the output of below code.

```javascript
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [, , ,];
console.log(array3);
```

- 1: [undefined × 3], [undefined × 2, 100], [undefined × 3]
- 2: [empty × 3], [empty × 2, 100], [empty × 3]
- 3: [null × 3], [null × 2, 100], [null × 3]
- 4: [], [100], []

<details>
  <summary>Answer</summary>

#### Answer: 2

The latest chrome versions display sparse array(they are filled with holes) using this empty x n notation. Whereas the older versions have undefined x n notation. Note: The latest version of FF displays n empty slots notation.

</details>

### Q106: What is the output of below code.

```javascript
const obj = {
  prop1: function () {
    return 0;
  },
  prop2() {
    return 1;
  },
  ["prop" + 3]() {
    return 2;
  },
};

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
```

- 1: 0, 1, 2
- 2: 0, { return 1 }, 2
- 3: 0, { return 1 }, { return 2 }
- 4: 0, 1, undefined

<details>
  <summary>Answer</summary>
#### Answer: 1

ES6 provides method definitions and property shorthands for objects. So both prop2 and prop3 are treated as regular function values.

</details>

### Q107: What is the output of below code.

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

- 1: true, true
- 2: true, false
- 3: SyntaxError, SyntaxError,
- 4: false, false

<details>
  <summary>Answer</summary>

#### Answer: 2

The important point is that if the statement contains the same operators(e.g, < or >) then it can be evaluated from left to right. The first statement follows the below order,

console.log(1 < 2 < 3);
console.log(true < 3);
console.log(1 < 3); // True converted as 1 during comparison
True
Whereas the second statement follows the below order,

console.log(3 > 2 > 1);
console.log(true > 1);
console.log(1 > 1); // False converted as 0 during comparison
False

</details>

### Q108: What is the output of below code in non-strict mode.

```javascript
function printNumbers(first, second, first) {
  console.log(first, second, first);
}
printNumbers(1, 2, 3);
```

- 1: 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1

<details>
  <summary>Answer</summary>

#### Answer: 2

In non-strict mode, the regular JavaScript functions allow duplicate named parameters. The above code snippet has duplicate parameters on 1st and 3rd parameters. The value of the first parameter is mapped to the third argument which is passed to the function. Hence, the 3rd argument overrides the first parameter.

Note: In strict mode, duplicate parameters will throw a Syntax Error.

</details>

### Q109: What is the output of below code.

```javascript
const printNumbersArrow = (first, second, first) => {
  console.log(first, second, first);
};
printNumbersArrow(1, 2, 3);
```

- 1: 1, 2, 3
- 2: 3, 2, 3
- 3: SyntaxError: Duplicate parameter name not allowed in this context
- 4: 1, 2, 1

<details>
  <summary>Answer</summary>
#### Answer: 3

Unlike regular functions, the arrow functions doesn't not allow duplicate parameters in either strict or non-strict mode. So you can see SyntaxError in the console.

</details>

### Q110: What is the output of below code.

```javascript
const arrowFunc = () => arguments.length;
console.log(arrowFunc(1, 2, 3));
```

- 1: ReferenceError: arguments is not defined
- 2: 3
- 3: undefined
- 4: null

<details>
  <summary>Answer</summary>

#### Answer: 1

Arrow functions do not have an arguments, super, this, or new.target bindings. So any reference to arguments variable tries to resolve to a binding in a lexically enclosing environment. In this case, the arguments variable is not defined outside of the arrow function. Hence, you will receive a reference error.

Where as the normal function provides the number of arguments passed to the function

```javascript
const func = function () {
  return arguments.length;
};
console.log(func(1, 2, 3));
```

But If you still want to use an arrow function then rest operator on arguments provides the expected arguments

```javascript
const arrowFunc = (...args) => args.length;
console.log(arrowFunc(1, 2, 3));
```

</details>

### Q111: What is the output of below code.

```javascript
console.log(String.prototype.trimLeft.name === "trimLeft");
console.log(String.prototype.trimLeft.name === "trimStart");
```

- 1: True, False
- 2: False, True

<details>
  <summary>Answer</summary>

#### Answer: 2

In order to be consistent with functions like String.prototype.padStart, the standard method name for trimming the whitespaces is considered as trimStart. Due to web web compatibility reasons, the old method name 'trimLeft' still acts as an alias for 'trimStart'. Hence, the prototype for 'trimLeft' is always 'trimStart'

</details>

### Q112: What is the output of below code.

```javascript
console.log(Math.max());
```

- 1: undefined
- 2: Infinity
- 3: 0
- 4: -Infinity

<details>
  <summary>Answer</summary>

#### Answer: 4

-Infinity is the initial comparant because almost every other value is bigger. So when no arguments are provided, -Infinity is going to be returned. Note: Zero number of arguments is a valid case.

</details>

### Q113: What is the output of below code.

```javascript
console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);
```

- 1: True, True
- 2: True, False
- 3: False, False
- 4: False, True

<details>
  <summary>Answer</summary>

#### Answer: 1

As per the comparison algorithm in the ECMAScript specification(ECMA-262), the above expression converted into JS as below

```javascript
10 === Number([10].valueOf().toString()); // 10
```

So it doesn't matter about number brackets([]) around the number, it is always converted to a number in the expression.

</details>

### Q114: What is the output of below code.

```javascript
console.log(10 + "10");
console.log(10 - "10");
```

- 1: 20, 0
- 2: 1010, 0
- 3: 1010, 10-10
- 4: NaN, NaN

<details>
  <summary>Answer</summary>

#### Answer: 2

The concatenation operator(+) is applicable for both number and string types. So if any operand is string type then both operands concatenated as strings. Whereas subtract(-) operator tries to convert the operands as number type.

</details>

### Q115: What is the output of below code.

```javascript
console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}
```

- 1: True, I'm True
- 2: True, I'm False
- 3: False, I'm True
- 4: False, I'm False

<details>
  <summary>Answer</summary>

#### Answer: 1

In comparison operators, the expression [0] converted to Number([0].valueOf().toString()) which is resolved to false. Whereas [0] just becomes a truthy value without any conversion because there is no comparison operator.

</details>

### Q116: What is the output of below code.

```javascript
console.log([1, 2] + [3, 4]);
```

- 1: [1,2,3,4]
- 2: [1,2][3,4]
- 3: SyntaxError
- 4: 1,23,4

<details>
  <summary>Answer</summary>
  
#### Answer: 4

The + operator is not meant or defined for arrays. So it converts arrays into strings and concatenates them.

</details>

### Q117: What is the output of below code.

```javascript
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set("Firefox");
console.log(browser);
```

- 1: {1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}
- 2: {1, 2, 3, 4}, {"F", "i", "r", "e", "o", "x"}
- 3: [1, 2, 3, 4], ["F", "i", "r", "e", "o", "x"]
- 4: {1, 1, 2, 3, 4}, {"F", "i", "r", "e", "f", "o", "x"}

<details>
  <summary>Answer</summary>
  
#### Answer: 1

Since Set object is a collection of unique values, it won't allow duplicate values in the collection. At the same time, it is case sensitive data structure.

</details>

### Q118: What is the output of below code.

```javascript
console.log(NaN === NaN);
```

- 1: True
- 2: False

<details>
  <summary>Answer</summary>
  
#### Answer: 2

JavaScript follows IEEE 754 spec standards. As per this spec, NaNs are never equal for floating-point numbers.

</details>

#### Q119: What is the output of below code.

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));
```

- 1: 4
- 2: NaN
- 3: SyntaxError
- 4: -1

<details>
  <summary>Answer</summary>
  
#### Answer: 4

The indexOf uses strict equality operator(===) internally and NaN === NaN evaluates to false. Since indexOf won't be able to find NaN inside an array, it returns -1 always. But you can use Array.prototype.findIndex method to find out the index of NaN in an array or You can use Array.prototype.includes to check if NaN is present in an array or not.

```javascript
let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(NaN)); // true
```

</details>

#### Q120: What is the output of below code.

```javascript
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b);
```

- 1: 1, [2, 3, 4, 5]
- 2: 1, {2, 3, 4, 5}
- 3: SyntaxError
- 4: 1, [2, 3, 4]

<details>
  <summary>Answer</summary>
  
#### Answer: 3

When using rest parameters, trailing commas are not allowed and will throw a SyntaxError. If you remove the trailing comma then it displays 1st answer

```javascript
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b);
```
