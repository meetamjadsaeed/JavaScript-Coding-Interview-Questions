# JavaScript Coding Interview Questions

## Description

This is my awesome project.

## Usage

### Q1: Check if a number is even or odd

```javascript
const output = (input) => {
  return Math.floor(input) % 2 == 0 ? "even" : "odd";
}

const param = 12.2;

console.log(output(param));
```

### Q2: Write a function that calculates the sum of an array of numbers

```javascript
const output = (input) => {
    let sum = 0;
    for (let i = 0; i < input.length; i++){
        sum+=input[i];
    }
    return sum;
}

const param = [1,2,4];

console.log(output(param));
```