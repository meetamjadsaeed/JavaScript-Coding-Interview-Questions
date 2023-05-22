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

### Q52: Write a function that returns the length of the shortest path in a matrix from the top-left corner to the bottom-right corner, moving only down or right

```javascript
// Define function to find shortest path length
function shortestPath(matrix) {
  // Get number of rows and columns in matrix
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  // Create a 2D array to store the minimum path lengths
  const minPathLengths = new Array(numRows)
    .fill()
    .map(() => new Array(numCols).fill(0));

  // Initialize the first element to the matrix value at (0,0)
  minPathLengths[0][0] = matrix[0][0];

  // Fill in the first row of minPathLengths
  for (let col = 1; col < numCols; col++) {
    minPathLengths[0][col] = minPathLengths[0][col - 1] + matrix[0][col];
  }

  // Fill in the first column of minPathLengths
  for (let row = 1; row < numRows; row++) {
    minPathLengths[row][0] = minPathLengths[row - 1][0] + matrix[row][0];
  }

  // Fill in the rest of minPathLengths using dynamic programming
  for (let row = 1; row < numRows; row++) {
    for (let col = 1; col < numCols; col++) {
      // Compute the minimum path length to (row, col)
      const fromTop = minPathLengths[row - 1][col] + matrix[row][col];
      const fromLeft = minPathLengths[row][col - 1] + matrix[row][col];
      minPathLengths[row][col] = Math.min(fromTop, fromLeft);
    }
  }

  // Return the shortest path length to the bottom-right corner
  return minPathLengths[numRows - 1][numCols - 1];
}
```

### Q53: Write a function that returns the number of islands in a matrix, where an island is a group of connected 1's surrounded by 0's

```javascript
/**
 * Counts the number of islands in a matrix, where an island is a group of
 * connected 1's surrounded by 0's.
 *
 * @param {number[][]} matrix - A 2D array of 0's and 1's representing the matrix
 * @returns {number} - The number of islands in the matrix
 */
function countIslands(matrix) {
  // Initialize a count for the number of islands
  let count = 0;

  // Define a recursive function to traverse the matrix
  function traverse(row, col) {
    // If the current cell is not a 1, return
    if (matrix[row][col] !== 1) {
      return;
    }

    // Mark the current cell as visited by changing it to a 2
    matrix[row][col] = 2;

    // Recursively traverse all neighboring cells
    if (row > 0) {
      traverse(row - 1, col);
    }
    if (col > 0) {
      traverse(row, col - 1);
    }
    if (row < matrix.length - 1) {
      traverse(row + 1, col);
    }
    if (col < matrix[0].length - 1) {
      traverse(row, col + 1);
    }
  }

  // Loop through each cell in the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      // If the current cell is a 1, increment the count and traverse the island
      if (matrix[row][col] === 1) {
        count++;
        traverse(row, col);
      }
    }
  }

  // Return the number of islands
  return count;
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

### Q65: Write a function that checks if a given number is a prime number using the Miller-Rabin primality test

```javascript
// This function takes a number as input and returns true if it is a prime number, false otherwise.
function isPrime(n) {
  // Check if n is less than 2 or if it is an even number greater than 2. In either case, it cannot be prime.
  if (n < 2 || (n != 2 && n % 2 == 0)) {
    return false;
  }

  // Determine the values of s and d for the Miller-Rabin test
  let s = 0;
  let d = n - 1;
  while (d % 2 == 0) {
    s++;
    d /= 2;
  }

  // Run the Miller-Rabin test for k iterations
  const k = 20; // The number of iterations to run
  for (let i = 0; i < k; i++) {
    // Choose a random witness
    const a = Math.floor(Math.random() * (n - 3) + 2);

    // Compute a^d mod n
    let x = Math.pow(a, d) % n;

    // If x is 1 or n-1, skip to the next iteration
    if (x == 1 || x == n - 1) {
      continue;
    }

    // Square x repeatedly and reduce modulo n
    for (let r = 1; r < s; r++) {
      x = Math.pow(x, 2) % n;
      if (x == 1) {
        return false;
      }
      if (x == n - 1) {
        break;
      }
    }

    // If x is not n-1 at this point, then n is composite
    if (x != n - 1) {
      return false;
    }
  }

  // If we get here, n is probably prime
  return true;
}
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

### Q72: Write a function to find the maximum value in a binary tree.

```javascript
// Binary tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to find the maximum value in a binary tree
function findMaxValue(root) {
  if (root === null) {
    // Empty tree, return null
    return null;
  }

  let maxValue = root.value; // Assume root value is the maximum

  // Recursive function to find maximum value in the left subtree
  const leftMax = findMaxValue(root.left);
  if (leftMax !== null && leftMax > maxValue) {
    maxValue = leftMax; // Update maximum value if left subtree has a higher value
  }

  // Recursive function to find maximum value in the right subtree
  const rightMax = findMaxValue(root.right);
  if (rightMax !== null && rightMax > maxValue) {
    maxValue = rightMax; // Update maximum value if right subtree has a higher value
  }

  return maxValue; // Return the maximum value in the binary tree
}

// Example usage
const rootNode = new Node(10);
rootNode.left = new Node(7);
rootNode.right = new Node(15);
rootNode.left.left = new Node(3);
rootNode.left.right = new Node(9);
rootNode.right.left = new Node(12);
rootNode.right.right = new Node(17);

const max = findMaxValue(rootNode);
console.log("Maximum value in the binary tree:", max);
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

### Q78: Write a function to reverse a linked list

```javascript
// Node class represents a single node in the linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Function to reverse a linked list
function reverseLinkedList(head) {
  let prev = null; // Previous node initially null
  let current = head; // Current node initially set to head
  let next = null; // Next node initially null

  // Iterate through the linked list
  while (current !== null) {
    // Store the next node
    next = current.next;

    // Reverse the pointer of the current node
    current.next = prev;

    // Move prev and current one step forward
    prev = current;
    current = next;
  }

  // Finally, update the head of the reversed linked list
  head = prev;

  // Return the reversed linked list
  return head;
}
```

### Q79: Write a function to implement binary search.

```javascript
/**
 * Binary search algorithm implementation.
 *
 * @param {Array} sortedArray - A sorted array of elements.
 * @param {*} target - The element to search for.
 * @returns {number} - The index of the target element in the array, or -1 if not found.
 */
function binarySearch(sortedArray, target) {
  let left = 0; // The leftmost index of the search range.
  let right = sortedArray.length - 1; // The rightmost index of the search range.

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Calculate the middle index.

    if (sortedArray[mid] === target) {
      return mid; // Found the target element, return its index.
    } else if (sortedArray[mid] < target) {
      left = mid + 1; // Target is in the right half, adjust the search range.
    } else {
      right = mid - 1; // Target is in the left half, adjust the search range.
    }
  }

  return -1; // Target element was not found in the array.
}
```

### Q80: Write a function to determine whether a binary tree is a binary search tree.

```javascript
/**
 * Binary search algorithm implementation.
 *
 * @param {Array} sortedArray - A sorted array of elements.
 * @param {*} target - The element to search for.
 * @returns {number} - The index of the target element in the array, or -1 if not found.
 */
// Node class represents a node in the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to check if a binary tree is a binary search tree
function isBinarySearchTree(root) {
  // Recursive helper function to check the validity of the binary search tree
  function isBSTUtil(node, min, max) {
    // Base case: an empty tree is a valid binary search tree
    if (node === null) {
      return true;
    }

    // If the node's value is outside the valid range, it's not a BST
    if (node.value <= min || node.value >= max) {
      return false;
    }

    // Recursively check the left and right subtrees, updating the valid range
    return (
      isBSTUtil(node.left, min, node.value) &&
      isBSTUtil(node.right, node.value, max)
    );
  }

  // Start the recursive check from the root node with an initial range of negative and positive infinity
  return isBSTUtil(root, -Infinity, Infinity);
}

// Create a binary tree
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

// Check if the binary tree is a binary search tree
const isBST = isBinarySearchTree(root);
console.log(isBST); // Output: true
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

### Q83: Write a function to implement a stack using a linked list.

```javascript
// Node class to represent individual elements in the linked list
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Stack class using linked list implementation
class Stack {
  constructor() {
    this.top = null; // Points to the topmost element in the stack
    this.size = 0; // Stores the number of elements in the stack
  }

  // Function to check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Function to get the number of elements in the stack
  getSize() {
    return this.size;
  }

  // Function to push an element onto the stack
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Function to remove and return the topmost element from the stack
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const poppedNode = this.top;
    this.top = poppedNode.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode.data;
  }

  // Function to get the topmost element in the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.top.data;
  }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20

console.log(stack.getSize()); // Output: 1

console.log(stack.isEmpty()); // Output: false
```
