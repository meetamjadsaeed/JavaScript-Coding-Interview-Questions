# JavaScript-Coding-Interview-Questions

## Q1: Write a function that checks if a number is even or odd

```js
const output = (input) => {
  return Math.floor(input) % 2 == 0 ? "even" : "odd";
}

const param = 12.2;
console.log(output(param)); // Output: "even"
