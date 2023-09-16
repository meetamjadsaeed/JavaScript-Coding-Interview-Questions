# JavaScript Coding Interview Questions ( Part 2 )

## Description

JavaScript Coding Interview Questions for small-medium companies.

### Note: If you haven't already explored Part 1, I encourage you to do so now.

<a href="https://github.com/meetamjadsaeed/JavaScript-Coding-Interview-Questions/blob/master/README.md" target="_blank"> Proceed to Part 1</a>

#### Q122: What is the output of below code.

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

#### Q123: What is the output of below code.

```javascript
async function func() {
  await 10;
}
console.log(func());
```

- 1: Promise {<fulfilled>: 10}
- 2: 10
- 3: SyntaxError
- 4: Promise {<resolved>: undefined}

<details>
  <summary>Answer</summary>
  
#### Answer: 4

The await expression returns value 10 with promise resolution and the code after each await expression can be treated as existing in a .then callback. In this case, there is no return expression at the end of the function. Hence, the default return value of undefined is returned as the resolution of the promise. The above async function is equivalent to below expression,

```javascript
function func() {
  return Promise.resolve(10).then(() => undefined);
}
```

</details>

#### Q124: What is the output of below code.

```javascript
function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function processArray(array) {
  array.forEach(item => {
    await delayedLog(item);
  })
}

processArray([1, 2, 3, 4]);
```

- 1: SyntaxError
- 2: 1, 2, 3, 4
- 3: 4, 4, 4, 4
- 4: 4, 3, 2, 1

<details>
  <summary>Answer</summary>
  
#### Answer: 1

Even though “processArray” is an async function, the anonymous function that we use for forEach is synchronous. If you use await inside a synchronous function then it throws a syntax error.

</details>

#### Q125: What is the output of below code.

```javascript
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log("Process completed!");
}
process([1, 2, 3, 5]);
```

- 1: 1 2 3 5 and Process completed!
- 2: 5 5 5 5 and Process completed!
- 3: Process completed! and 5 5 5 5
- 4: Process completed! and 1 2 3 5

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 4

The forEach method will not wait until all items are finished but it just runs the tasks and goes next. Hence, the last statement is displayed first followed by a sequence of promise resolutions.

But you control the array sequence using for..of loop,

```javascript
async function processArray(array) {
  for (const item of array) {
    await delayedLog(item);
  }
  console.log("Process completed!");
}
```

</details>

#### Q126: What is the output of below code.

```javascript
var set = new Set();
set.add("+0").add("-0").add(NaN).add(undefined).add(NaN);
console.log(set);
```

- 1: Set(4) {"+0", "-0", NaN, undefined}
- 2: Set(3) {"+0", NaN, undefined}
- 3: Set(5) {"+0", "-0", NaN, undefined, NaN}
- 4: Set(4) {"+0", NaN, undefined, NaN}

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 1

Set has few exceptions from equality check,

All NaN values are equal
Both +0 and -0 considered as different values

</details>

#### Q127: What is the output of below code.

```javascript
const sym1 = Symbol("one");
const sym2 = Symbol("one");

const sym3 = Symbol.for("two");
const sym4 = Symbol.for("two");

console.log(sym1 === sym2, sym3 === sym4);
```

- 1: true, true
- 2: true, false
- 3: false, true
- 4: false, false

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 3

Symbol follows below conventions,

Every symbol value returned from Symbol() is unique irrespective of the optional string.
Symbol.for() function creates a symbol in a global symbol registry list. But it doesn't necessarily create a new symbol on every call, it checks first if a symbol with the given key is already present in the registry and returns the symbol if it is found. Otherwise a new symbol created in the registry.
Note: The symbol description is just useful for debugging purposes.

</details>

#### Q128: What is the output of below code.

```javascript
const sym1 = new Symbol("one");
console.log(sym1);
```

- 1: SyntaxError
- 2: one
- 3: Symbol('one')
- 4: Symbol

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 1

Symbol is a just a standard function and not an object constructor(unlike other primitives new Boolean, new String and new Number). So if you try to call it with the new operator will result in a TypeError

</details>

#### Q129: What is the output of below code.

```javascript
let myNumber = 100;
let myString = "100";

if (!typeof myNumber === "string") {
  console.log("It is not a string!");
} else {
  console.log("It is a string!");
}

if (!typeof myString === "number") {
  console.log("It is not a number!");
} else {
  console.log("It is a number!");
}
```

- 1: SyntaxError
- 2: It is not a string!, It is not a number!
- 3: It is not a string!, It is a number!
- 4: It is a string!, It is a number!

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 4

The return value of typeof myNumber or typeof myString is always a truthy value (either "number" or "string"). The ! operator operates on either typeof myNumber or typeof myString, converting them to boolean values. Since the value of both !typeof myNumber and !typeof myString is false, the if condition fails, and control goes to else block.

To make the ! operator operate on the equality expression, one needs to add parentheses:

if (!(typeof myNumber === "string"))

Or simply use the inequality operator:

if (typeof myNumber !== "string")

</details>

#### Q130: What is the output of below code.

```javascript
console.log(
  JSON.stringify({ myArray: ["one", undefined, function () {}, Symbol("")] })
);
console.log(
  JSON.stringify({ [Symbol.for("one")]: "one" }, [Symbol.for("one")])
);
```

- 1: {"myArray":['one', undefined, {}, Symbol]}, {}
- 2: {"myArray":['one', null,null,null]}, {}
- 3: {"myArray":['one', null,null,null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
- 4: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 2

The symbols has below constraints,

The undefined, Functions, and Symbols are not valid JSON values. So those values are either omitted (in an object) or changed to null (in an array). Hence, it returns null values for the value array.
All Symbol-keyed properties will be completely ignored. Hence it returns an empty

```javascript
object({});
```

.

</details>

#### Q131: What is the output of below code.

```javascript
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

new A();
new B();
```

- 1: A, A
- 2: A, B

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 2

Using constructors, new.target refers to the constructor (points to the class definition of class which is initialized) that was directly invoked by new. This also applies to the case if the constructor is in a parent class and was delegated from a child constructor.

</details>

#### Q133: What is the output of below code.

```javascript
const [x, ...y, z] = [1, 2, 3, 4];
console.log(x, y, z);
```

- 1: 1, [2, 3], 4
- 2: 1, [2, 3, 4], undefined
- 3: 1, [2], 3
- 4: SyntaxError

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 4

It throws a syntax error because the rest element should not have a trailing comma. You should always consider using a rest operator as the last element.

</details>

#### Q134: What is the output of below code.

```javascript
const { a: x = 10, b: y = 20 } = { a: 30 };

console.log(x);
console.log(y);
```

- 1: 30, 20
- 2: 10, 20
- 3: 10, undefined
- 4: 30, undefined

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 1

The object property follows below rules,

The object properties can be retrieved and assigned to a variable with a different name
The property assigned a default value when the retrieved value is undefined

</details>

#### Q135: What is the output of below code.

```javascript
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area();
```

- 1: 200
- 2: Error
- 3: undefined
- 4: 0

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 2

If you leave out the right-hand side assignment for the destructuring object, the function will look for at least one argument to be supplied when invoked. Otherwise you will receive an error Error: Cannot read property 'length' of undefined as mentioned above.

You can avoid the error with either of the below changes,

Pass at least an empty object:

```javascript
function area({ length = 10, width = 20 }) {
  console.log(length * width);
}

area({});
```

Assign default empty object:

```javascript
function area({ length = 10, width = 20 } = {}) {
  console.log(length * width);
}

area();
```

</details>

#### Q136: What is the output of below code.

```javascript
const props = [
  { id: 1, name: "John" },
  { id: 2, name: "Jack" },
  { id: 3, name: "Tom" },
];

const [, , { name }] = props;
console.log(name);
```

- 1: Tom
- 2: Error
- 3: undefined
- 4: John

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 1

It is possible to combine Array and Object destructuring. In this case, the third element in the array props accessed first followed by name property in the object.

</details>

#### Q137: What is the output of below code.

```javascript
function checkType(num = 1) {
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType("");
checkType(null);
```

- 1: number, undefined, string, object
- 2: undefined, undefined, string, object
- 3: number, number, string, object
- 4: number, number, number, numbern

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 3

If the function argument is set implicitly(not passing argument) or explicitly to undefined, the value of the argument is the default parameter. Whereas for other falsy values('' or null), the value of the argument is passed as a parameter.

Hence, the result of function calls categorized as below,

The first two function calls logs number type since the type of default value is number
The type of '' and null values are string and object type respectively.

</details>

#### Q138: What is the output of below code.

```javascript
function add(item, items = []) {
  items.push(item);
  return items;
}

console.log(add("Orange"));
console.log(add("Apple"));
```

- 1: ['Orange'], ['Orange', 'Apple']
- 2: ['Orange'], ['Apple']

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 2

Since the default argument is evaluated at call time, a new object is created each time the function is called. So in this case, the new array is created and an element pushed to the default empty array.

</details>

#### Q139: What is the output of below code.

```javascript
function greet(greeting, name, message = greeting + " " + name) {
  console.log([greeting, name, message]);
}

greet("Hello", "John");
greet("Hello", "John", "Good morning!");
```

- 1: SyntaxError
- 2: ['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 2

Since parameters defined earlier are available to later default parameters, this code snippet doesn't throw any error.

</details>

#### Q140: What is the output of below code.

```javascript
function outer(f = inner()) {
  function inner() {
    return "Inner";
  }
}
outer();
```

- 1: ReferenceError
- 2: Inner

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 1

The functions and variables declared in the function body cannot be referred from default value parameter initializers. If you still try to access, it throws a run-time ReferenceError(i.e, inner is not defined).

</details>

#### Q141: What is the output of below code.

```javascript
function myFun(x, y, ...manyMoreArgs) {
  console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);
```

- 1: [3, 4, 5], undefined
- 2: SyntaxError
- 3: [3, 4, 5], []
- 4: [3, 4, 5], [undefined]

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 3

The rest parameter is used to hold the remaining parameters of a function and it becomes an empty array if the argument is not provided.

</details>

#### Q142: What is the output of below code.

```javascript
const obj = { key: "value" };
const array = [...obj];
console.log(array);
```

- 1: ['key', 'value']
- 2: TypeError
- 3: []
- 4: ['key']

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 2

Spread syntax can be applied only to iterable objects. By default, Objects are not iterable, but they become iterable when used in an Array, or with iterating functions such as map(), reduce(), and assign(). If you still try to do it, it still throws TypeError: obj is not iterable.

</details>

#### Q143: What is the output of below code.

```javascript
function* myGenFunc() {
  yield 1;
  yield 2;
  yield 3;
}
var myGenObj = new myGenFunc();
console.log(myGenObj.next().value);
```

- 1: 1
- 2: undefined
- 3: SyntaxError
- 4: TypeError

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 4

Generators are not constructible type. But if you still proceed to do, there will be an error saying "TypeError: myGenFunc is not a constructor"

</details>

#### Q144: What is the output of below code.

```javascript
function* yieldAndReturn() {
  yield 1;
  return 2;
  yield 3;
}

var myGenObj = yieldAndReturn();
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
```

- 1: { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }
- 2: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }
- 3: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }
- 4: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 1

A return statement in a generator function will make the generator finish. If a value is returned, it will be set as the value property of the object and done property to true. When a generator is finished, subsequent next() calls return an object of this form: {value: undefined, done: true}.

</details>

#### Q145: What is the output of below code.

```javascript
const myGenerator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();
for (const value of myGenerator) {
  console.log(value);
  break;
}

for (const value of myGenerator) {
  console.log(value);
}
```

- 1: 1,2,3 and 1,2,3
- 2: 1,2,3 and 4,5,6
- 3: 1 and 1
- 4: 1

<details>
  <summary>Answer</summary>
  
#### Correct Answer is: 4

The generator should not be re-used once the iterator is closed. i.e, Upon exiting a loop(on completion or using break & return), the generator is closed and trying to iterate over it again does not yield any more results. Hence, the second loop doesn't print any value.

</details>

#### Q146: What is the output of below code.

```javascript
const num = 0o38;
console.log(num);
```

- 1: SyntaxError
- 2: 38

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 1

If you use an invalid number(outside of 0-7 range) in the octal literal, JavaScript will throw a SyntaxError. In ES5, it treats the octal literal as a decimal number.

</details>

#### Q147: What is the output of below code.

```javascript
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
  constructor(length) {
    this.length = length;
  }

  get area() {
    return this.length * this.length;
  }

  set area(value) {
    this.area = value;
  }
}
```

1: 100
2: ReferenceError

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 2

Unlike function declarations, class declarations are not hoisted. i.e, First You need to declare your class and then access it, otherwise it will throw a ReferenceError "Uncaught ReferenceError: Square is not defined".

Note: Class expressions also applies to the same hoisting restrictions of class declarations.

</details>

#### Q148: What is the output of below code.

```javascript
function Person() {}

Person.prototype.walk = function () {
  return this;
};

Person.run = function () {
  return this;
};

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());
```

- 1: undefined, undefined
- 2: Person, Person
- 3: SyntaxError
- 4: Window, Window

<details>
  <summary>Answer</summary>
  
#### Correct Answer: 4

When a regular or prototype method is called without a value for this, the methods return an initial this value if the value is not undefined. Otherwise global window object will be returned. In our case, the initial this value is undefined so both methods return window objects.

</details>
