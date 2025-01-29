import { Question } from '../../types';

export const javascriptQuestions: Question[] = [
  {
    id: 'js-1',
    category: 'JavaScript Basics',
    title: 'What is JavaScript and what are its advantages?',
    answer: 'JavaScript is a lightweight, interpreted programming language commonly used to create interactive and dynamic content on web pages. Advantages include: 1. Client-side execution for faster interactivity. 2. Broad browser support. 3. Versatility in both frontend and backend (with Node.js). 4. Rich ecosystem with libraries and frameworks. 5. Ease of learning and wide community support.',
  },
  {
    id: 'js-2',
    category: 'JavaScript Basics',
    title: 'What are the disadvantages of JavaScript?',
    answer: 'Disadvantages of JavaScript include: 1. Security vulnerabilities due to client-side execution. 2. Browser dependency for feature support. 3. Difficulty debugging due to dynamic typing. 4. Can be slower than compiled languages for complex tasks.',
  },
  {
    id: 'js-3',
    category: 'JavaScript Basics',
    title: 'What are the data types in JavaScript?',
    answer: 'JavaScript has primitive and non-primitive data types. Primitives include: string, number, boolean, undefined, null, symbol, and bigint. Non-primitives are objects, arrays, and functions.',
    codeExample: `const name = 'John'; // string
const age = 25; // number
const isStudent = true; // boolean
let address; // undefined
const emptyValue = null; // null
const id = Symbol('id'); // symbol
const bigIntNum = 12345678901234567890n; // bigint`
  },
  {
    id: 'js-4',
    category: 'JavaScript Basics',
    title: 'What is the difference between == and === in JavaScript?',
    answer: '`==` checks for equality after type conversion, while `===` checks for strict equality without type conversion.',
    codeExample: `console.log(5 == '5'); // true (type coercion occurs)
console.log(5 === '5'); // false (strict equality)`
  },
  {
    id: 'js-5',
    category: 'JavaScript Basics',
    title: 'What is hoisting in JavaScript?',
    answer: 'Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the compile phase. Declarations are hoisted, but initializations are not.',
    codeExample: `console.log(x); // undefined
var x = 5;

sayHello(); // Works because function declarations are hoisted
function sayHello() {
  console.log('Hello');
}`
  },
  {
    id: 'js-6',
    category: 'JavaScript Basics',
    title: 'Explain closures in JavaScript.',
    answer: 'A closure is a function that retains access to its outer scope even after the outer function has returned. Closures are commonly used for data privacy and maintaining state.',
    codeExample: `function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`
  },
  {
    id: 'js-7',
    category: 'JavaScript Basics',
    title: 'What is the difference between let, const, and var?',
    answer: 'var is function-scoped and hoisted, while let and const are block-scoped. const prevents reassignment, while let allows reassignment. It is best practice to use const by default.',
    codeExample: `var x = 10; // Function scoped
let y = 20; // Block scoped
const z = 30; // Block scoped and immutable
console.log(x, y, z);`
  },
  {
    id: 'js-8',
    category: 'JavaScript Programs',
    title: 'Write a JavaScript program to check if a number is prime.',
    answer: 'A prime number is only divisible by 1 and itself.',
    codeExample: `function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true`
  },
  {
    id: 'js-9',
    category: 'JavaScript Programs',
    title: 'How do you reverse a string in JavaScript without built-in methods?',
    answer: 'You can reverse a string using a loop.',
    codeExample: `function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString('hello')); // 'olleh'`
  },
  {
    id: 'js-10',
    category: 'JavaScript Basics',
    title: 'What is lexical scoping in JavaScript?',
    answer: 'Lexical scoping means that a function’s scope is defined by its physical location in the source code, and nested functions have access to variables declared in their outer scope.',
    codeExample: `function outer() {
  const outerVar = 'I am outer';
  function inner() {
    console.log(outerVar); // Can access outerVar
  }
  inner();
}
outer();`
  },
  {
    id: 'js-11',
    category: 'JavaScript Basics',
    title: 'What is the difference between function scope and block scope?',
    answer: 'In JavaScript, var has function scope, meaning it is accessible within the entire function it is declared in. let and const have block scope, meaning they are only accessible within the block (enclosed by {}) they are declared in.',
    codeExample: `function testScope() {
    if (true) {
      var functionScoped = 'I am function scoped';
      let blockScoped = 'I am block scoped';
      const alsoBlockScoped = 'I am also block scoped';
    }
    console.log(functionScoped); // Works
    console.log(blockScoped); // Error
    console.log(alsoBlockScoped); // Error
  }
  testScope();`
  },
  {
    id: 'js-12',
    category: 'JavaScript Basics',
    title: 'What is the difference between synchronous and asynchronous JavaScript?',
    answer: 'Synchronous code is executed line by line, blocking further execution until the current task completes. Asynchronous code allows other tasks to execute while waiting for an operation to complete, such as fetching data from an API.',
    codeExample: `// Synchronous
  console.log('Start');
  console.log('End');
  
  // Asynchronous
  console.log('Start');
  setTimeout(() => console.log('Asynchronous Task'), 1000);
  console.log('End');`
  },
  {
    id: 'js-13',
    category: 'JavaScript Basics',
    title: 'What is a callback function in JavaScript?',
    answer: 'A callback function is a function passed as an argument to another function, to be executed later. Callbacks are commonly used for handling asynchronous operations.',
    codeExample: `function greet(name, callback) {
    console.log('Hello, ' + name);
    callback();
  }
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  greet('John', sayGoodbye);`
  },
  {
    id: 'js-14',
    category: 'JavaScript Basics',
    title: 'What is the difference between call, apply, and bind in JavaScript?',
    answer: 'All three methods are used to explicitly set the value of this. call invokes the function immediately, accepting arguments one by one. apply also invokes the function but takes arguments as an array. bind returns a new function with the specified this value.',
    codeExample: `const obj = { name: 'Alice' };
  function greet(greeting) {
    console.log(greeting + ', ' + this.name);
  }
  greet.call(obj, 'Hello'); // "Hello, Alice"
  greet.apply(obj, ['Hi']); // "Hi, Alice"
  const boundGreet = greet.bind(obj);
  boundGreet('Hey'); // "Hey, Alice"`
  },
  {
    id: 'js-15',
    category: 'JavaScript Basics',
    title: 'What is the difference between deep copy and shallow copy in JavaScript?',
    answer: 'A shallow copy copies only the first level of properties in an object, while a deep copy creates a copy of all nested objects and properties. Shallow copies can result in unintended shared references for nested objects.',
    codeExample: `// Shallow Copy
  const original = { a: 1, b: { c: 2 } };
  const shallowCopy = Object.assign({}, original);
  shallowCopy.b.c = 42;
  console.log(original.b.c); // 42
  
  // Deep Copy
  const deepCopy = JSON.parse(JSON.stringify(original));
  deepCopy.b.c = 99;
  console.log(original.b.c); // 42`
  },
  {
    id: 'js-16',
    category: 'JavaScript Programs',
    title: 'Write a program to check if a string is a palindrome.',
    answer: 'A string is a palindrome if it reads the same forward and backward.',
    codeExample: `function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  console.log(isPalindrome('madam')); // true
  console.log(isPalindrome('hello')); // false`
  },
  {
    id: 'js-17',
    category: 'JavaScript Programs',
    title: 'Write a program to generate a Fibonacci sequence without using built-in methods.',
    answer: 'The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.',
    codeExample: `function fibonacci(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      if (i < 2) result.push(i);
      else result.push(result[i - 1] + result[i - 2]);
    }
    return result;
  }
  console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`
  },
  {
    id: 'js-18',
    category: 'JavaScript Basics',
    title: 'What is event bubbling in JavaScript?',
    answer: 'Event bubbling is a mechanism where an event starts from the deepest target element and propagates up to its ancestors. You can stop bubbling by using event.stopPropagation().',
    codeExample: `<div onclick="alert('Parent')">
    <button onclick="alert('Child')">Click me</button>
  </div>`
  },
  {
    id: 'js-19',
    category: 'JavaScript Basics',
    title: 'What are arrow functions, and how are they different from regular functions?',
    answer: 'Arrow functions are a shorter syntax for writing functions. They do not have their own this context and cannot be used as constructors.',
    codeExample: `// Regular Function
  function add(a, b) {
    return a + b;
  }
  
  // Arrow Function
  const add = (a, b) => a + b;`
  },
  {
    id: 'js-20',
    category: 'JavaScript Basics',
    title: 'What is the JavaScript call stack?',
    answer: 'The call stack is a data structure used by JavaScript to manage function execution. It operates on a last-in, first-out (LIFO) principle, where the last function called is the first to finish execution.',
    codeExample: `function first() {
    second();
    console.log('First');
  }
  function second() {
    console.log('Second');
  }
  first();
  // Output: Second, First`
  },
  {
    id: 'js-21',
    category: 'JavaScript Basics',
    title: 'What is the difference between synchronous and asynchronous code?',
    answer: 'Synchronous code executes sequentially, blocking further execution until the current task completes. Asynchronous code allows other tasks to run while waiting for an operation to finish.',
    codeExample: `console.log('Start');
  setTimeout(() => console.log('Asynchronous Task'), 1000);
  console.log('End');`
  },
  {
    id: 'js-22',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the this keyword in JavaScript?',
    answer: 'The this keyword refers to the context in which a function is called. Its value can change depending on how the function is invoked.',
    codeExample: `const obj = {
    name: 'Alice',
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  obj.greet(); // Hello, Alice`
  },
  {
    id: 'js-23',
    category: 'JavaScript Basics',
    title: 'What is a prototype in JavaScript?',
    answer: 'A prototype is an object from which other objects inherit properties. Every JavaScript object has a prototype, which is used for inheritance.',
    codeExample: `function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
  };
  const alice = new Person('Alice');
  alice.greet(); // Hello, Alice`
  },
  {
    id: 'js-24',
    category: 'JavaScript Basics',
    title: 'What is the difference between call, apply, and bind?',
    answer: 'call invokes a function immediately with a specified this value and arguments. apply does the same but takes arguments as an array. bind returns a new function with a specified this value, which can be invoked later.',
    codeExample: `const obj = { name: 'Alice' };
function greet(greeting) {
  console.log(greeting + ', ' + this.name);
}
greet.call(obj, 'Hello'); // "Hello, Alice"
greet.apply(obj, ['Hi']); // "Hi, Alice"
const boundGreet = greet.bind(obj);
boundGreet('Hey'); // "Hey, Alice"`
  },
  {
    id: 'js-25',
    category: 'JavaScript Basics',
    title: 'What is an Immediately Invoked Function Expression (IIFE)?',
    answer: 'An IIFE is a function that runs as soon as it is defined. It is often used to create a private scope.',
    codeExample: `(function() {
  console.log('I am an IIFE');
})();`
  },
  {
    id: 'js-26',
    category: 'JavaScript Basics',
    title: 'How does JavaScript handle default parameters in functions?',
    answer: 'JavaScript allows you to set default values for function parameters, which are used if no value or undefined is passed.',
    codeExample: `function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}
greet(); // Hello, Guest
greet('Alice'); // Hello, Alice`
  },
  {
    id: 'js-27',
    category: 'JavaScript Basics',
    title: 'What is a Promise in JavaScript?',
    answer: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected.',
    codeExample: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});
myPromise.then(result => console.log(result)); // Success!`
  },
  {
    id: 'js-28',
    category: 'JavaScript Basics',
    title: 'What are async/await in JavaScript?',
    answer: 'async/await is a syntax for working with Promises that allows you to write asynchronous code in a more synchronous manner. The async keyword is used to declare a function as asynchronous, and await is used to pause execution until a Promise is resolved.',
    codeExample: `async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}
fetchData();`
  },
  {
    id: 'js-29',
    category: 'JavaScript Basics',
    title: 'What is the Document Object Model (DOM)?',
    answer: 'The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of web pages.',
  },
  {
    id: 'js-30',
    category: 'JavaScript Basics',
    title: 'What is the Browser Object Model (BOM)?',
    answer: 'The BOM provides a way to interact with the browser outside of the DOM. It allows you to control the browser window, navigate, and access browser-specific features.',
  },
  {
    id: 'js-31',
    category: 'JavaScript Basics',
    title: 'What is the difference between DOM and BOM?',
    answer: 'The DOM represents the structure of the document, while the BOM provides methods and properties to interact with the browser itself. The DOM is focused on the document, whereas the BOM is focused on the browser environment.',
  },
  {
    id: 'js-32',
    category: 'JavaScript Basics',
    title: 'How do you add an event listener in JavaScript?',
    answer: 'You can add an event listener to an element using the addEventListener method, which allows you to specify the event type and a callback function.',
    codeExample: `const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});`
  },
  {
    id: 'js-33',
    category: 'JavaScript Basics',
    title: 'What is array destructuring in JavaScript?',
    answer: 'Array destructuring allows you to unpack values from arrays into distinct variables, making it easier to work with array elements.',
    codeExample: `const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1 2 3`
  },
  {
    id: 'js-34',
    category: 'JavaScript Basics',
    title: 'What is the difference between rest and spread operators?',
    answer: 'The rest operator (...) collects multiple elements into an array, while the spread operator (...) expands an array into individual elements. The rest operator is used in function parameters, while the spread operator is used in function calls or array literals.',
    codeExample: `// Rest operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]`
  },
  {
    id: 'js-35',
    category: 'JavaScript Basics',
    title: 'What is try/catch in JavaScript?',
    answer: 'try/catch is a statement used to handle exceptions in JavaScript. The code inside the try block is executed, and if an error occurs, control is passed to the catch block.',
    codeExample: `try {
  throw new Error('An error occurred');
} catch (error) {
  console.log(error.message); // An error occurred
}`
  },
  {
    id: 'js-36',
    category: 'JavaScript Basics',
    title: 'What is the difference between asynchronous and synchronous JavaScript?',
    answer: 'Synchronous JavaScript executes tasks one after another, blocking further execution until the current task is complete. Asynchronous JavaScript allows tasks to run concurrently, enabling other operations to continue while waiting for a task to finish.',
  },
  {
    id: 'js-37',
    category: 'JavaScript Basics',
    title: 'What is the difference between null and undefined?',
    answer: 'null is an assignment value that represents no value or object, while undefined indicates that a variable has been declared but has not yet been assigned a value.',
    codeExample: `let a = null; // a is explicitly set to null
let b; // b is undefined
console.log(a, b); // null undefined`
  },
  {
    id: 'js-38',
    category: 'JavaScript Basics',
    title: 'What are Web APIs?',
    answer: 'Web APIs are interfaces that allow interaction with web services and resources. They provide a way for JavaScript to communicate with external services, such as fetching data from a server.',
  },
  {
    id: 'js-39',
    category: 'JavaScript Basics',
    title: 'What is the difference between macrotasks and microtasks?',
    answer: 'Macrotasks include tasks like setTimeout and setInterval, while microtasks include promises and mutation observers. Microtasks are executed after the currently executing script and before any macrotasks.',
  },
  {
    id: 'js-40',
    category: 'JavaScript Basics',
    title: 'What is setTimeout and setInterval?',
    answer: 'setTimeout is used to execute a function after a specified delay, while setInterval repeatedly executes a function at specified intervals.',
    codeExample: `setTimeout(() => console.log('Executed after 1 second'), 1000);
setInterval(() => console.log('Executed every 2 seconds'), 2000);`
  },
  {
    id: 'js-41',
    category: 'JavaScript Basics',
    title: 'What is Object.assign in JavaScript?',
    answer: 'Object.assign is a method used to copy the values of all enumerable properties from one or more source objects to a target object. It returns the target object.',
    codeExample: `const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2 }`
  },
  {
    id: 'js-42',
    category: 'JavaScript Basics',
    title: 'What is coercion in JavaScript?',
    answer: 'Coercion is the automatic or implicit conversion of values from one data type to another. JavaScript performs coercion in various situations, such as when using operators.',
    codeExample: `console.log('5' + 5); // '55' (string concatenation)
console.log('5' - 5); // 0 (string to number conversion)`
  },
  {
    id: 'js-43',
    category: 'JavaScript Basics',
    title: 'What is the difference between typeof and instanceof?',
    answer: 'typeof is an operator that returns a string indicating the type of a variable, while instanceof is an operator that tests whether an object is an instance of a specific constructor.',
    codeExample: `console.log(typeof 'Hello'); // 'string'
console.log([] instanceof Array); // true`
  },
  {
    id: 'js-44',
    category: 'JavaScript Basics',
    title: 'What is the difference between a callback and a promise?',
    answer: 'A callback function is executed after a certain event occurs, while a promise represents a value that may be available now, or in the future, or never. Promises provide a cleaner way to handle asynchronous operations compared to callbacks, avoiding callback hell.',
    codeExample: `// Callback
function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}
fetchData(data => console.log(data)); // Data received

// Promise
const fetchDataPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Data received');
  }, 1000);
});
fetchDataPromise.then(data => console.log(data)); // Data received`
  },
  {
    id: 'js-45',
    category: 'JavaScript Basics',
    title: 'What is single-threaded in JavaScript?',
    answer: 'JavaScript is single-threaded, meaning it can only execute one task at a time. However, it can handle asynchronous operations using callbacks, promises, and async/await, allowing it to perform non-blocking operations.',
  },
  {
    id: 'js-46',
    category: 'JavaScript Basics',
    title: 'How does JavaScript handle multithreading?',
    answer: 'JavaScript handles multithreading through Web Workers, which allow you to run scripts in background threads. This enables parallel execution of tasks without blocking the main thread.',
  },
  {
    id: 'js-47',
    category: 'JavaScript Basics',
    title: 'What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript, commonly used with React to describe what the UI should look like. It allows you to write HTML-like syntax directly in JavaScript code.',
    codeExample: `const element = <h1>Hello, world!</h1>;`
  },
  {
    id: 'js-48',
    category: 'JavaScript Basics',
    title: 'What is memory allocation in JavaScript?',
    answer: 'Memory allocation in JavaScript refers to the process of reserving memory for variables and objects. JavaScript uses a garbage collector to automatically manage memory, freeing up space that is no longer needed.',
  },
  {
    id: 'js-49',
    category: 'JavaScript Basics',
    title: 'What is garbage collection in JavaScript?',
    answer: 'Garbage collection is the process of automatically freeing up memory by removing objects that are no longer referenced in the program. JavaScript uses algorithms like mark-and-sweep to identify and collect unused memory.',
  },
  {
    id: 'js-50',
    category: 'JavaScript Basics',
    title: 'What is the call stack?',
    answer: 'The call stack is a data structure that keeps track of function calls in JavaScript. It follows a last-in, first-out (LIFO) order, where the last function called is the first to finish execution.',
  },
  {
    id: 'js-51',
    category: 'JavaScript Basics',
    title: 'What is the task queue?',
    answer: 'The task queue is a queue that holds messages or tasks to be processed after the current execution context is completed. It allows asynchronous callbacks to be executed once the call stack is empty.',
  },
  {
    id: 'js-52',
    category: 'JavaScript Basics',
    title: 'What is the heap in JavaScript?',
    answer: 'The heap is a region of memory used for dynamic memory allocation. Objects and variables that are created at runtime are stored in the heap, allowing for flexible memory usage.',
  },
  {
    id: 'js-53',
    category: 'JavaScript Basics',
    title: 'What is currying in JavaScript?',
    answer: 'Currying is a functional programming technique where a function is transformed into a sequence of functions, each taking a single argument. It allows for partial application of functions.',
    codeExample: `function add(a) {
  return function(b) {
    return a + b;
  };
}
const addFive = add(5);
console.log(addFive(3)); // 8`
  },
  {
    id: 'js-54',
    category: 'JavaScript Basics',
    title: 'What is memoization in JavaScript?',
    answer: 'Memoization is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.',
    codeExample: `function memoizedAdd() {
  const cache = {};
  return function(x) {
    if (cache[x]) {
      return cache[x];
    }
    const result = x + 10; // Expensive operation
    cache[x] = result;
    return result;
  };
}
const add = memoizedAdd();
console.log(add(5)); // 15
console.log(add(5)); // 15 (cached)`
  },
  {
    id: 'js-55',
    category :'JavaScript Basics',
    title: 'What is function composition in JavaScript?',
    answer: 'Function composition is the process of combining two or more functions to produce a new function. The output of one function becomes the input of another.',
    codeExample: `const add = x => x + 1;
const multiply = x => x * 2;
const compose = (f, g) => x => f(g(x));
const addThenMultiply = compose(multiply, add);
console.log(addThenMultiply(5)); // 12`
  },
  {
    id: 'js-56',
    category: 'JavaScript Basics',
    title: 'What is function chaining in JavaScript?',
    answer: 'Function chaining is a technique where multiple function calls are made on the same object in a single statement, allowing for more concise and readable code.',
    codeExample: `const obj = {
  value: 0,
  add(num) {
    this.value += num;
    return this; // Return the object for chaining
  },
  multiply(num) {
    this.value *= num;
    return this; // Return the object for chaining
  }
};
obj.add(5).multiply(2);
console.log(obj.value); // 0 (initial value, chaining does not change it)`
  },
  {
    id: 'js-57',
    category: 'JavaScript Basics',
    title: 'What is immutability in JavaScript?',
    answer: 'Immutability refers to the inability to change an object or variable once it has been created. In JavaScript, primitive types are immutable, while objects and arrays are mutable.',
    codeExample: `const obj = { a: 1 };
const newObj = { ...obj, a: 2 }; // Create a new object instead of modifying the original
console.log(obj.a); // 1
console.log(newObj.a); // 2`
  },
  {
    id: 'js-58',
    category: 'JavaScript Basics',
    title: 'What is an iterator in JavaScript?',
    answer: 'An iterator is an object that allows you to traverse through a collection, such as an array or a string, one element at a time. It implements the next() method to return the next value and a done property to indicate completion.',
    codeExample: `const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }`
  },
  {
    id: 'js-59',
    category: 'JavaScript Basics',
    title: 'What is the debugger in JavaScript?',
    answer: 'The debugger is a tool that allows developers to inspect and debug JavaScript code. You can use the debugger statement in your code to pause execution and inspect variables and call stack.',
    codeExample: `function test() {
  const x = 10;
  debugger; // Execution will pause here
  console.log(x);
}
test();`
  },
  {
    id: 'js-60',
    category: 'JavaScript Basics',
    title: 'What are Web APIs in JavaScript?',
    answer: 'Web APIs are interfaces provided by the browser that allow JavaScript to interact with the browser and the web. Examples include the Fetch API, DOM API, and Web Storage API.',
  },
  {
    id: 'js-61',
    category: 'JavaScript Basics',
    title: 'What is polymorphism in JavaScript?',
    answer: 'Polymorphism is the ability of different objects to respond to the same method call in different ways. In JavaScript, this can be achieved through method overriding and duck typing.',
  },
  {
    id: 'js-62',
    category: 'JavaScript Basics',
    title: 'What is the difference between monomorphic, polymorphic, and metamorphic in JavaScript?',
    answer: 'Monomorphic refers to a function that operates on a single type of data. Polymorphic functions can operate on multiple types, while metamorphic functions can change their structure or behavior based on the context.',
  },
  {
    id: 'js-63',
    category: 'JavaScript Basics',
    title: 'What is inline caching in JavaScript?',
    answer: 'Inline caching is an optimization technique used by JavaScript engines to speed up property access by storing the location of a property in memory after the first access.',
  },
  {
    id: 'js-64',
    category: 'JavaScript Basics',
    title: 'What is inheritance in JavaScript?',
    answer: 'Inheritance is a mechanism where one object can inherit properties and methods from another object. In JavaScript, this is typically achieved through prototypes or class-based inheritance.',
    codeExample: `function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};

function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}
Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
Dog.prototype.bark = function() {
  console.log(this.name + ' barks.');
};

const dog = new Dog('Rex');
dog.speak(); // Rex makes a noise.
dog.bark(); // Rex barks.`
  },
  {
    id: 'js-65',
    category: 'JavaScript Basics',
    title: 'What is the difference between defer and async in script loading?',
    answer: 'Both defer and async are attributes for script tags that control how scripts are loaded. defer loads the script in the background and executes it after the HTML is fully parsed, while async loads the script in the background and executes it as soon as it is available, potentially before the HTML is fully parsed.',
    codeExample: `<script src="script.js" defer></script>
<script src="script.js" async></script>`
  },
  {
    id: 'js-66',
    category: 'JavaScript Basics',
    title: 'What is the nullish coalescing operator?',
    answer: 'The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined, providing a way to set default values.',
    codeExample: `const value = null;
const defaultValue = 'default';
console.log(value ?? defaultValue); // 'default'`
  },
  {
    id: 'js-67',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.map() method?',
    answer: 'The Array.map() method creates a new array populated with the results of calling a provided function on every element in the calling array.',
    codeExample: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]`
  },
  {
    id: 'js-68',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.filter() method?',
    answer: 'The Array.filter() method creates a new array with all elements that pass the test implemented by the provided function.',
    codeExample: `const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]`
  },
  {
    id: 'js-69',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.find() method?',
    answer: 'The Array.find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.',
    codeExample: `const numbers = [1, 2, 3, 4, 5];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2`
  },
  {
    id: 'js-70',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.reduce() method?',
    answer: 'The Array.reduce() method executes a reducer function on each element of the array, resulting in a single output value.',
    codeExample: `const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15`
  },
  {
    id: 'js-71',
    category: 'JavaScript Basics',
    title: 'What is the difference between map, filter, find, and reduce?',
    answer: 'map transforms each element of an array and returns a new array, filter creates a new array with elements that pass a test, find returns the first element that satisfies a condition, and reduce accumulates values into a single result.',
  },
  {
    id: 'js-72',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.forEach() method?',
    answer: 'The Array.forEach() method executes a provided function once for each array element, allowing you to perform operations on each element without returning a new array.',
    codeExample: `const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6`
  },
  {
    id: 'js-73',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.some() method?',
    answer: 'The Array.some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.',
    codeExample: `const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true`
  },
  {
    id: 'js-74',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.every() method?',
    answer: 'The Array.every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
    codeExample: `const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true`
  },
  {
    id: 'js-75',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.includes() method?',
    answer: 'The Array.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.',
    codeExample: `const fruits = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // true`
  },
  {
    id: 'js-76',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.splice() method?',
    answer: 'The Array.splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.',
    codeExample: `const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 6); // Removes 1 element at index 2 and adds 6
console.log(numbers); // [1, 2, 6, 4, 5]`
  },
  {
    id: 'js-77',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.slice() method?',
    answer: 'The Array.slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).',
    codeExample: `const numbers = [1, 2, 3, 4, 5];
const sliced = numbers.slice(1, 3);
console.log(sliced); // [2, 3]`
  },
  {
    id: 'js-78',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.concat() method?',
    answer: 'The Array.concat() method is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.',
    codeExample: `const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4]`
  },
  {
    id: 'js-79',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.join() method?',
    answer: 'The Array.join() method joins all elements of an array into a string and returns this string. You can specify a separator to use between the elements.',
    codeExample: `const fruits = ['apple', 'banana', 'orange'];
const fruitString = fruits.join(', ');
console.log(fruitString); // 'apple, banana, orange'`
  },
  {
    id: 'js-80',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.reverse() method?',
    answer: 'The Array.reverse() method reverses the elements of an array in place and returns the reversed array.',
    codeExample: `const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]`
  },
  {
    id: 'js-81',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.sort() method?',
    answer: 'The Array.sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is according to string Unicode code points.',
    codeExample: `const numbers = [3, 1, 2];
numbers.sort();
console.log(numbers); // [1, 2, 3]`
  },
  {
    id: 'js-82',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.fill() method?',
    answer: 'The Array.fill() method fills an array with a static value from a start index to an end index. It modifies the original array and returns it.',
    codeExample: `const arr = new Array(3).fill(0);
console.log(arr); // [0, 0, 0]`
  },
  {
    id: 'js-83',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.findIndex() method?',
    answer: 'The Array.findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.',
    codeExample: `const numbers = [1, 2, 3, 4, 5];
const index = numbers.findIndex(num => num > 3);
console.log(index); // 3`
  },
  {
    id: 'js-84',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.flat() method?',
    answer: 'The Array.flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.',
    codeExample: `const arr = [1, [2, [3, 4]]];
const flatArr = arr.flat(2);
console.log(flatArr); // [1, 2, 3, 4]`
  },
  {
    id: 'js-85',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.flatMap() method?',
    answer: 'The Array.flatMap() method first maps each element using a mapping function, then flattens the result into a new array.',
    codeExample: `const arr = [1, 2, 3];
const flatMapped = arr.flatMap(x => [x, x * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6]`
  },
  {
    id: 'js-86',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.every() method?',
    answer: 'The Array.every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.',
    codeExample: `const numbers = [2, 4, 6];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true`
  },
  {
    id: 'js-87',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.some() method?',
    answer: 'The Array.some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.',
    codeExample: `const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true`
  },
  {
    id: 'js-88',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.reduceRight() method?',
    answer: 'The Array.reduceRight() method executes a reducer function on each element of the array, from right to left, resulting in a single output value.',
    codeExample: `const numbers = [1, 2, 3];
const sum = numbers.reduceRight((acc, num) => acc + num, 0);
console.log(sum); // 6`
  },
  {
    id: 'js-89',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.copyWithin() method?',
    answer: 'The Array.copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.',
    codeExample: `const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr); // [4, 5, 3, 4, 5]`
  },
  {
    id: 'js-90',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.shift() method?',
    answer: 'The Array.shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.',
    codeExample: `const arr = [1, 2, 3];
const first = arr.shift();
console.log(first); // 1
console.log(arr); // [2, 3]`
  },
  {
    id: 'js-91',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.unshift() method?',
    answer: 'The Array.unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.',
    codeExample: `const arr = [2, 3];
const newLength = arr.unshift(1);
console.log(newLength); // 3
console.log(arr); // [1, 2, 3]`
  },
  {
    id: 'js-92',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.pop() method?',
    answer: 'The Array.pop() method removes the last element from an array and returns that element. This method changes the length of the array.',
    codeExample: `const arr = [1, 2, 3];
const last = arr.pop();
console.log(last); // 3
console.log(arr); // [1, 2]`
  },
  {
    id: 'js-93',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.push() method?',
    answer: 'The Array.push() method adds one or more elements to the end of an array and returns the new length of the array.',
    codeExample: `const arr = [1, 2];
const newLength = arr.push(3);
console.log(newLength); // 3
console.log(arr); // [1, 2, 3]`
  },
  {
    id: 'js-94',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.toString() method?',
    answer: 'The Array.toString() method returns a string representing the specified array and its elements. The elements are separated by commas.',
    codeExample: `const arr = [1, 2, 3];
console.log(arr.toString()); // '1,2,3'`
  },
  {
    id: 'js-95',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.valueOf() method?',
    answer: 'The Array.valueOf() method returns the primitive value of the specified array, which is the array itself.',
    codeExample: `const arr = [1, 2, 3];
console.log(arr.valueOf()); // [1, 2, 3]`
  },
  {
    id: 'js-96',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.entries() method?',
    answer: 'The Array.entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.',
    codeExample: `const arr = ['a', 'b', 'c'];
const iterator = arr.entries();
console.log(iterator.next().value); // [0, 'a']`
  },
  {
    id: 'js-97',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.keys() method?',
    answer: 'The Array.keys() method returns a new Array Iterator object that contains the keys for each index in the array.',
    codeExample: `const arr = ['a', 'b', 'c'];
const iterator = arr.keys();
console.log(iterator.next().value); // 0`
  },
  {
    id: 'js-98',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.values() method?',
    answer: 'The Array.values() method returns a new Array Iterator object that contains the values for each index in the array.',
    codeExample: `const arr = ['a', 'b', 'c'];
const iterator = arr.values();
console.log(iterator.next().value); // 'a'`
  },
  {
    id: 'js-99',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.from() method?',
    answer: 'The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.',
    codeExample: `const str = 'hello';
const arr = Array.from(str);
console.log(arr); // ['h', 'e', 'l', 'l', 'o']`
  },
  {
    id: 'js-100',
    category: 'JavaScript Basics',
    title: 'What is the purpose of the Array.of() method?',
    answer: 'The Array.of() method creates a new Array instance with a variable number of arguments, regardless of the number or type of the arguments.',
    codeExample: `const arr = Array.of(1, 2, 3);
console.log(arr); // [1, 2, 3]`
  }
]