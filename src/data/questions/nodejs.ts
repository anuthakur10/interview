import { Question } from '../../types';

export const nodejsQuestions: Question[] = [
  {
    id: 'node-1',
    category: 'NodeJS',
    title: 'What is Node.js Event Loop?',
    answer: 'The Event Loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It handles executing callbacks, network I/O, and disk I/O in different phases. Main phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks.',
  },
  {
    id: 'node-2',
    category: 'NodeJS',
    title: 'Explain middleware in Express.js.',
    answer: 'Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function. They can execute code, modify req/res objects, end the request-response cycle, and call the next middleware.',
    codeExample: `app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});`
  },
  {
    id: 'node-3',
    category: 'NodeJS',
    title: 'What is the purpose of package.json?',
    answer: 'package.json is a project manifest file that contains metadata about the project and its dependencies. It includes: project name, version, dependencies, dev dependencies, scripts for running tasks, and other configuration settings.',
    codeExample: `{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1"
  },
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}`
  },
  {
    id: 'node-4',
    category: 'NodeJS',
    title: 'What is the difference between require() and import?',
    answer: 'require() is a CommonJS module syntax used in Node.js, while import is part of the ES6 module syntax. require() is synchronous and can be used conditionally, while import is asynchronous and must be at the top level.',
    codeExample: `// CommonJS
const express = require('express');

// ES6
import express from 'express';`
  },
  {
    id: 'node-5',
    category: 'NodeJS',
    title: 'What is the purpose of the Node.js package manager (npm)?',
    answer: 'npm is the default package manager for Node.js, allowing developers to install, share, and manage dependencies for their projects. It provides a command-line interface for managing packages and scripts.',
  },
  {
    id: 'node-6',
    category: 'NodeJS',
    title: 'What is the difference between synchronous and asynchronous programming in Node.js?',
    answer: 'Synchronous programming executes tasks one after another, blocking further execution until the current task completes. Asynchronous programming allows tasks to run concurrently, enabling other operations to continue while waiting for a task to finish.',
  },
  {
    id: 'node-7',
    category: 'NodeJS',
    title: 'What are streams in Node.js?',
    answer: 'Streams are objects that allow reading data from a source or writing data to a destination in a continuous manner. They are used for handling large amounts of data efficiently, such as reading files or processing HTTP requests.',
  },
  {
    id: 'node-8',
    category: 'NodeJS',
    title: 'What is the purpose of the fs module in Node.js?',
    answer: 'The fs (file system) module provides an API for interacting with the file system, allowing you to read, write, and manipulate files and directories.',
    codeExample: `const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});`
  },
  {
    id: 'node-9',
    category: 'NodeJS',
    title: 'What is the purpose of the http module in Node.js?',
    answer: 'The http module allows you to create HTTP servers and clients. It provides methods for handling requests and responses, enabling you to build web applications and APIs.',
    codeExample: `const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`
  },
  {
    id: 'node-10',
    category: 'NodeJS',
    title: 'What is the purpose of the path module in Node.js?',
    answer: 'The path module provides utilities for working with file and directory paths. It helps in manipulating and resolving paths in a cross-platform manner.',
    codeExample: `const path = require('path');
const filePath = path.join(__dirname, 'file.txt');
console.log(filePath); // Outputs the full path to file.txt`
  },
  {
    id: 'node-11',
    category: 'NodeJS',
    title: 'What is the purpose of the process object in Node.js?',
    answer: 'The process object provides information about the current Node.js process and allows you to interact with it. It includes properties and methods for managing the process, such as environment variables, command-line arguments, and exit codes.',
  },
  {
    id: 'node-12',
    category: 'NodeJS',
    title: 'What is the purpose of the buffer module in Node.js?',
    answer: 'The buffer module provides a way to work with binary data in Node.js. It allows you to manipulate raw binary data and convert between different encodings.',
    codeExample: `const buf = Buffer.from('Hello World', 'utf8');
console.log(buf.toString()); // 'Hello World'`
  },
  {
    id: 'node-13',
    category: 'NodeJS',
    title: 'What is the purpose of the events module in Node.js?',
    answer: 'The events module provides an implementation of the EventEmitter class, which allows you to create and handle custom events in your applications. It enables asynchronous event-driven programming.',
    codeExample: `const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {
  console.log('An event occurred!');
});
myEmitter.emit('event'); // 'An event occurred!'`
  },
  {
    id: 'node-14',
    category: 'NodeJS',
    title: 'What is the purpose of the child_process module in Node.js?',
    answer: 'The child_process module allows you to create and manage child processes in Node.js. It enables you to execute shell commands and spawn new processes, allowing for parallel execution of tasks.',
    codeExample: `const { exec } = require('child_process');
exec('ls', (error, stdout, stderr) => {
  if (error) {

    return;
  }
  console.log(stdout);
});`
  },
  {
    id: 'node-15',
    category: 'NodeJS',
    title: 'What is the purpose of the crypto module in Node.js?',
    answer: 'The crypto module provides cryptographic functionality, including a set of wrappers for OpenSSL’s hash, HMAC, cipher, decipher, sign, and verify functions. It is used for secure data encryption and decryption.',
    codeExample: `const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('Hello World').digest('hex');
console.log(hash); // Outputs the SHA-256 hash of 'Hello World'`
  },
  {
    id: 'node-16',
    category: 'NodeJS',
    title: 'What is the purpose of the url module in Node.js?',
    answer: 'The url module provides utilities for URL resolution and parsing. It allows you to work with URLs in a structured way, making it easier to extract components like protocol, host, path, and query parameters.',
    codeExample: `const url = require('url');
const myURL = new URL('https://example.com/path?name=John');
console.log(myURL.hostname); // 'example.com'`
  },
  {
    id: 'node-17',
    category: 'NodeJS',
    title: 'What is the purpose of the os module in Node.js?',
    answer: 'The os module provides operating system-related utility methods and properties. It allows you to access information about the operating system, such as CPU architecture, platform, and network interfaces.',
    codeExample: `const os = require('os');
console.log(os.platform()); // Outputs the platform (e.g., 'linux', 'darwin', 'win32')`
  },
  {
    id: 'node-18',
    category: 'NodeJS',
    title: 'What is the purpose of the http2 module in Node.js?',
    answer: 'The http2 module provides an implementation of the HTTP/2 protocol, allowing you to create HTTP/2 servers and clients. It offers improved performance and features like multiplexing, header compression, and server push.',
    codeExample: `const http2 = require('http2');
const server = http2.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello HTTP/2\n');
});
server.listen(3000, () => {
  console.log('HTTP/2 server running at https://localhost:3000/');
});`
  },
  {
    id: 'node-19',
    category: 'NodeJS',
    title: 'What is the purpose of the cluster module in Node.js?',
    answer: 'The cluster module allows you to create child processes that share the same server port. It enables you to take advantage of multi-core systems by spawning multiple instances of your application.',
    codeExample: `const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\n');
  }).listen(8000);
}`
  },
  {
    id: 'node-20',
    category: 'NodeJS',
    title: 'What is the purpose of the readline module in Node.js?',
    answer: 'The readline module provides an interface for reading data from a Readable stream (like process.stdin) one line at a time. It is useful for creating command-line interfaces.',
    codeExample: `const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', (answer) => {

  rl.close();
});`
  },
  {
    id: 'node-21',
    category: 'NodeJS',
    title: 'What is the purpose of the assert module in Node.js?',
    answer: 'The assert module provides a set of assertion tests that can be used to test invariants in your code. It is commonly used in unit testing to verify that conditions are true.',
    codeExample: `const assert = require('assert');
assert.strictEqual(1, 1); // No error
assert.strictEqual(1, 2); // Throws an error`
  },
  {
    id: 'node-22',
    category: 'NodeJS',
    title: 'What is the purpose of the vm module in Node.js?',
    answer: 'The vm module provides APIs for compiling and running code within V8 virtual machine contexts. It allows you to execute JavaScript code in a sandboxed environment.',
    codeExample: `const vm = require('vm');
const code = 'console.log("Hello from VM!");';
vm.runInThisContext(code);`
  },
  {
    id: 'node-23',
    category: 'NodeJS',
    title: 'What is the purpose of the domain module in Node.js?',
    answer: 'The domain module provides a way to handle multiple I/O operations as a single group. It allows you to manage error handling across asynchronous calls, but it is deprecated in favor of using async/await and try/catch.',
  },
  {
    id: 'node-24',
    category: 'NodeJS',
    title: 'What is the purpose of the timers module in Node.js?',
    answer: 'The timers module provides functions to schedule the execution of code after a specified delay. It includes setTimeout, setInterval, and clearTimeout.',
    codeExample: `setTimeout(() => {
  console.log('Executed after 1 second');
}, 1000);`
  },
  {
    id: 'node-25',
    category: 'NodeJS',
    title: 'What is the purpose of the dns module in Node.js?',
    answer: 'The dns module provides functions to perform DNS lookups and name resolution. It allows you to resolve domain names to IP addresses and vice versa.',
    codeExample: `const dns = require('dns');
dns.lookup('example.com', (err, addresses) => {
  if (err) throw err;
  console.log('IP Address:', addresses);
});`
  },
  {
    id: 'node-26',
    category: 'NodeJS',
    title: 'What is the purpose of the net module in Node.js?',
    answer: 'The net module provides an asynchronous network API for creating TCP or IPC servers and clients. It allows you to build network applications easily.',
    codeExample: `const net = require('net');
const server = net.createServer((socket) => {
  socket.write('Hello from server!\ socket.end();
});
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});`
  },
  {
    id: 'node-27',
    category: 'NodeJS',
    title: 'What is the purpose of the http2 module in Node.js?',
    answer: 'The http2 module allows you to create HTTP/2 servers and clients, providing features like multiplexing, header compression, and server push for improved performance.',
    codeExample: `const http2 = require('http2');
const server = http2.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello HTTP/2\n');
});
server.listen(3000, () => {
  console.log('HTTP/2 server running at https://localhost:3000/');
});`
  },
  {
    id: 'node-28',
    category: 'NodeJS',
    title: 'What is the purpose of the performance module in Node.js?',
    answer: 'The performance module provides an API for measuring performance in Node.js applications. It allows you to create performance marks and measures to analyze the execution time of code segments.',
    codeExample: `const { performance } = require('perf_hooks');
const start = performance.now();
// Code to measure
const end = performance.now();`
  },
  {
    id: 'node-29',
    category: 'NodeJS',
    title: 'What is the purpose of the inspector module in Node.js?',
    answer: 'The inspector module provides an API for debugging Node.js applications using the Chrome DevTools. It allows you to inspect and debug your code in real-time.',
  },
  {
    id: 'node-30',
    category: 'NodeJS',
    title: 'What is the purpose of the worker_threads module in Node.js?',
    answer: 'The worker_threads module allows you to create threads that can run JavaScript operations in parallel, enabling multi-threading capabilities in Node.js applications.',
    codeExample: `const { Worker } = require('worker_threads');
const worker = new Worker('./worker.js');
worker.on('message', (message) => {
  console.log('Message from worker:', message);
});`
  },
  {
    id: 'node-31',
    category: 'NodeJS',
    title: 'What is the purpose of the async_hooks module in Node.js?',
    answer: 'The async_hooks module provides an API to track asynchronous resources in Node.js. It allows you to create hooks that can be triggered at different points in the lifecycle of asynchronous operations.',
  },
  {
    id: 'node-32',
    category: 'NodeJS',
    title: 'What is the purpose of the native module in Node.js?',
    answer: 'The native module allows you to create native C++ addons for Node.js, enabling you to extend Node.js functionality with C/C++ code for performance-critical tasks.',
  },
  {
    id: 'node-33',
    category: 'NodeJS',
    title: 'What is the purpose of the repl module in Node.js?',
    answer: 'The repl module provides a Read-Eval-Print Loop for interactive command-line applications. It allows you to execute JavaScript code in a REPL environment.',
    codeExample: `const repl = require('repl');
repl.start('> ');`
  },
  {
    id: 'node-34',
    category: 'NodeJS',
    title: 'What is the purpose of the stream module in Node.js?',
    answer: 'The stream module provides an API for working with streaming data. It allows you to read and write data in a continuous flow, making it efficient for handling large datasets.',
  },
  {
    id: 'node-35',
    category: 'NodeJS',
    title: 'What is the purpose of the http-proxy module in Node.js?',
    answer: 'The http-proxy module allows you to create a proxy server in Node.js. It enables you to forward requests to another server and handle responses, useful for building APIs and microservices.',
  },
  {
    id: 'node-36',
    category: 'NodeJS',
    title: 'What is the purpose of the socket.io module in Node.js?',
    answer: 'The socket.io module enables real-time, bidirectional communication between web clients and servers. It is commonly used for building chat applications and real-time notifications.',
  },
  {
    id: 'node-37',
    category: 'NodeJS',
    title: 'What is the purpose of the mongoose module in Node.js?',
    answer: 'Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model application data and includes built-in validation and query building.',
  },
  {
    id: ' node-38',
    category: 'NodeJS',
    title: 'What is the purpose of the express-validator module in Node.js?',
    answer: 'express-validator is a set of middlewares that wraps validator.js, allowing you to validate and sanitize user input in Express.js applications. It helps ensure that incoming data meets specific criteria before processing.',
    codeExample: `const { body, validationResult } = require('express-validator');
app.post('/user', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Proceed with user creation
});`
  },
  {
    id: 'node-39',
    category: 'NodeJS',
    title: 'What is the purpose of the cors module in Node.js?',
    answer: 'The cors module is a middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js applications. It allows you to specify which domains can access your resources, helping to secure your API.',
    codeExample: `const cors = require('cors');
app.use(cors({
  origin: 'https://example.com'
}));`
  },
  {
    id: 'node-40',
    category: 'NodeJS',
    title: 'What is the purpose of the dotenv module in Node.js?',
    answer: 'dotenv is a module that loads environment variables from a .env file into process.env. It helps manage configuration settings and sensitive information like API keys without hardcoding them in your application.',
    codeExample: `require('dotenv').config();
console.log(process.env.DB_HOST); // Accesses the DB_HOST variable from .env`
  },
  {
    id: 'node-41',
    category: 'NodeJS',
    title: 'What is the purpose of the helmet module in Node.js?',
    answer: 'Helmet is a middleware for securing Express.js applications by setting various HTTP headers. It helps protect against common vulnerabilities like cross-site scripting (XSS) and clickjacking.',
    codeExample: `const helmet = require('helmet');
app.use(helmet());`
  },
  {
    id: 'node-42',
    category: 'NodeJS',
    title: 'What is the purpose of the multer module in Node.js?',
    answer: 'Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. It simplifies the process of handling file uploads in Express.js applications.',
    codeExample: `const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});`
  },
  {
    id: 'node-43',
    category: 'NodeJS',
    title: 'What is the purpose of the mongoose-paginate-v2 module in Node.js?',
    answer: 'mongoose-paginate-v2 is a plugin for Mongoose that adds pagination capabilities to your MongoDB queries. It simplifies the process of paginating results in your applications.',
    codeExample: `const mongoosePaginate = require('mongoose-paginate-v2');
const schema = new mongoose.Schema({ name: String });
schema.plugin(mongoosePaginate);
const Model = mongoose.model('Model', schema);
Model.paginate({}, { page: 1, limit: 10 }).then(result => {
  console.log(result);
});`
  },
  {
    id: 'node-44',
    category: 'NodeJS',
    title: 'What is the purpose of the jsonwebtoken module in Node.js?',
    answer: 'jsonwebtoken is a library for creating and verifying JSON Web Tokens (JWT). It is commonly used for authentication and authorization in web applications, allowing you to securely transmit information between parties.',
    codeExample: `const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 123 }, 'secretKey');
const decoded = jwt.verify(token, 'secretKey');`
  },
  {
    id: 'node-45',
    category: 'NodeJS',
    title: 'What is the purpose of the bcrypt module in Node.js?',
    answer: 'bcrypt is a library for hashing passwords. It provides a way to securely store user passwords by hashing them before saving to the database, making it difficult for attackers to retrieve the original passwords.',
    codeExample: `const bcrypt = require('bcrypt');
const saltRounds = 10;
bcrypt.hash('myPassword', saltRounds, (err, hash) => {
  // Store hash in your password DB
});`
  },
  {
    id: 'node-46',
    category: 'NodeJS',
    title: 'What is the purpose of the nodemailer module in Node.js?',
    answer: 'Nodemailer is a module for sending emails from Node.js applications. It allows you to send emails using various transport methods, including SMTP, and supports features like attachments and HTML content.',
    codeExample: `const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Hello',
  text: 'Hello World!'
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});`
  },
  {
    id: 'node-47',
    category: 'NodeJS',
    title: 'What is the purpose of the socket.io module in Node.js?',
    answer: 'Socket.io is a library for real-time web applications. It enables real-time, bidirectional communication between web clients and servers, making it ideal for chat applications and live notifications.',
    codeExample: `const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer();
const io = socketIo(server);
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});`
  },
  {
    id: 'node-48',
    category: 'NodeJS',
    title: 'What is the purpose of the pm2 module in Node.js?',
    answer: 'PM2 is a process manager for Node.js applications that allows you to keep your applications alive forever, reload them without downtime, and manage application logs and monitoring.',
    codeExample: `// Start an application
pm2 start app.js
// Monitor applications
pm2 monit`
  },
  {
    id: 'node-49',
    category: 'NodeJS',
    title: 'What is the purpose of the compression module in Node.js?',
    answer: 'Compression is a middleware for compressing HTTP responses in Express.js applications. It helps reduce the size of the response body, improving performance and reducing bandwidth usage.',
    codeExample: `const compression = require('compression');
app.use(compression());`
  },
  {
    id: 'node-50',
    category: 'NodeJS',
    title: 'What is the purpose of the express-session module in Node.js?',
    answer: 'express-session is a middleware for managing sessions in Express.js applications. It allows you to store user session data on the server and associate it with a unique session ID.',
    codeExample: `const session = require('express-session');
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));`
  },
  {
    id: 'node-51',
    category: 'NodeJS',
    title: 'What is the purpose of the mongoose module in Node.js?',
    answer: 'Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model application data and includes built-in validation and query building.',
    codeExample: `const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User ', userSchema);
const user = new User({ name: 'John' });
user.save();`
  },
  {
    id: 'node-52',
    category: 'NodeJS',
    title: 'What is the purpose of the multer module in Node.js?',
    answer: 'Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files. It simplifies the process of handling file uploads in Express.js applications.',
    codeExample: `const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully!');
});`
  },
  {
    id: 'node-53',
    category: 'NodeJS',
    title: 'What is the purpose of the cors module in Node.js?',
    answer: 'The cors module is a middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js applications. It allows you to specify which domains can access your resources, helping to secure your API.',
    codeExample: `const cors = require('cors');
app.use(cors({
  origin: 'https://example.com'
}));`
  },
  {
    id: 'node-54',
    category: 'NodeJS',
    title: 'What is the purpose of the dotenv module in Node.js?',
    answer: 'dotenv is a module that loads environment variables from a .env file into process.env. It helps manage configuration settings and sensitive information like API keys without hardcoding them in your application.',
    codeExample: `require('dotenv').config();
console.log(process.env.DB_HOST); // Accesses the DB_HOST variable from .env`
  },
  {
    id: 'node-55',
    category: 'NodeJS',
    title: 'What is the purpose of the helmet module in Node.js?',
    answer: 'Helmet is a middleware for securing Express.js applications by setting various HTTP headers. It helps protect against common vulnerabilities like cross-site scripting (XSS) and clickjacking.',
    codeExample: `const helmet = require('helmet');
app.use(helmet());`
  },
  {
    id: 'node-56',
    category: 'NodeJS',
    title: 'What is the purpose of the jsonwebtoken module in Node.js?',
    answer: 'jsonwebtoken is a library for creating and verifying JSON Web Tokens (JWT). It is commonly used for authentication and authorization in web applications, allowing you to securely transmit information between parties.',
    codeExample: `const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 123 }, 'secretKey');
const decoded = jwt.verify(token, 'secretKey');`
  },
  {
    id: 'node-57',
    category: 'NodeJS',
    title: 'What is the purpose of the bcrypt module in Node.js?',
    answer: 'bcrypt is a library for hashing passwords. It provides a way to securely store user passwords by hashing them before saving to the database, making it difficult for attackers to retrieve the original passwords.',
    codeExample: `const bcrypt = require('bcrypt');
const saltRounds = 10;
bcrypt.hash('myPassword', saltRounds, (err, hash) => {
  // Store hash in your password DB
});`
  },
  {
    id: 'node-58',
    category: 'NodeJS',
    title: 'What is the purpose of the nodemailer module in Node.js?',
    answer: 'Nodemailer is a module for sending emails from Node.js applications. It allows you to send emails using various transport methods, including SMTP, and supports features like attachments and HTML content.',
    codeExample: `const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient@example.com',
  subject: 'Hello',
  text: 'Hello World!'
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});`
  },
  {
    id: 'node-59',
    category: 'NodeJS',
    title: 'What is the purpose of the pm2 module in Node.js?',
    answer: 'PM2 is a process manager for Node.js applications that allows you to keep your applications alive forever, reload them without downtime, and manage application logs and monitoring.',
    codeExample: `// Start an application
pm2 start app.js
// Monitor applications
pm2 monit`
  },
  {
    id: 'node-60',
    category: 'NodeJS',
    title: 'What is the purpose of the compression module in Node.js?',
    answer: 'Compression is a middleware for compressing HTTP responses in Express.js applications. It helps reduce the size of the response body, improving performance and reducing bandwidth usage.',
    codeExample: `const compression = require('compression');
app.use(compression());`
  },
  {
    id: 'node-61',
    category: 'NodeJS',
    title: 'What is the purpose of the express-session module in Node.js?',
    answer: 'express-session is a middleware for managing sessions in Express.js applications. It allows you to store user session data on the server and associate it with a unique session ID.',
    codeExample: `const session = require('express-session');
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));`
  },
  {
    id: 'node-62',
    category: 'NodeJS',
    title: 'What is the purpose of the mongoose module in Node.js?',
    answer: 'Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model application data and includes built-in validation and query building.',
    codeExample: `const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User ', userSchema);
const user = new User({ name: 'John' });
user.save();`
  },
  {
    id: 'node-63',
    category: 'NodeJS',
    title: 'What is the purpose of the express-rate-limit module in Node.js?',
    answer: 'express-rate-limit is a middleware for limiting repeated requests to public APIs and endpoints. It helps prevent abuse and denial-of-service attacks by controlling the rate of requests.',
    codeExample: `const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);`
  },
  {
    id: 'node-64',
    category: 'NodeJS',
    title: 'What is the purpose of the helmet-csp module in Node.js?',
    answer: 'helmet-csp is a middleware for setting Content Security Policy (CSP) headers in Express.js applications. It helps prevent cross-site scripting (XSS) and other code injection attacks.',
    codeExample: `const helmet = require('helmet');
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'example.com']
  }
}));`
  },
  {
    id: 'node-65',
    category: 'NodeJS',
    title: 'What is the purpose of the express-fileupload module in Node.js?',
    answer: 'express-fileupload is a middleware for handling file uploads in Express.js applications. It simplifies the process of handling file uploads and provides easy access to uploaded files.',
    codeExample: `const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
  const sampleFile = req.files.sampleFile;
  sampleFile.mv('/somewhere/on/your/server/filename.jpg', (err) => {
    if (err) return res.status(500).send(err);
    res.send('File uploaded!');
  });
});`
  },
  {
    id: 'node-66',
    category: 'NodeJS',
    title: 'What is the purpose of the express-async-handler module in Node.js?',
    answer: 'express-async-handler is a middleware for handling asynchronous route handlers in Express.js. It simplifies error handling for async functions by automatically passing errors to the next middleware.',
    codeExample: `const asyncHandler = require('express-async-handler');
app.get('/async', asyncHandler(async (req, res) => {
  const data = await someAsyncFunction();
  res.send(data);
}));`
  },
  {
    id: 'node-67',
    category: 'NodeJS',
    title: 'What is the purpose of the mongoose-unique-validator module in Node.js?',
    answer: 'mongoose-unique-validator is a Mongoose plugin that adds pre-save validation for unique fields within a schema. It helps ensure that duplicate values are not saved in the database.',
    codeExample: `const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});
userSchema.plugin(uniqueValidator);`
  },
  {
    id: 'node-68',
    category: 'NodeJS',
    title: 'What is the purpose of the express-session-file-store module in Node.js?',
    answer: 'express-session-file-store is a session store for Express.js that stores session data in files. It is useful for persisting session data across server restarts.',
    codeExample: `const FileStore = require('session-file-store')(session);
app.use(session({
  store: new FileStore(),
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));`
  },
  {
    id: 'node-69',
    category: 'NodeJS',
    title: 'What is the purpose of the express-redis-session module in Node.js?',
    answer: 'express-redis-session is a session store for Express.js that uses Redis to store session data. It provides fast access to session data and is suitable for distributed applications.',
    codeExample: `const RedisStore = require('connect-redis')(session);
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));`
  },
  {
    id: 'node-70',
    category: 'NodeJS',
    title: 'What is the purpose of the express-jwt module in Node.js?',
    answer: 'express-jwt is a middleware for validating JSON Web Tokens (JWT) in Express.js applications. It helps secure routes by ensuring that only authenticated users can access them.',
    codeExample: `const jwt = require('express-jwt');
app.use(jwt({ secret: 'secretKey', algorithms: ['HS256'] }).unless({ path: ['/login'] }));`
  },
  {
    id: 'node-71',
    category: 'NodeJS',
    title: 'What is the purpose of the socket.io-redis module in Node.js?',
    answer: 'socket.io-redis is a Redis adapter for Socket.io that allows you to scale your Socket.io applications across multiple Node.js processes or servers, enabling real-time communication in distributed environments.',
  },
  {
    id: 'node-72',
    category: 'NodeJS',
    title: 'What is the purpose of the express-rate-limit module in Node.js?',
    answer: 'express-rate-limit is a middleware for limiting repeated requests to public APIs and endpoints. It helps prevent abuse and denial-of-service attacks by controlling the rate of requests.',
    codeExample: `const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);`
  },
  {
    id: 'node-73',
    category: 'NodeJS',
    title: 'What is the purpose of the express-validator module in Node.js?',
    answer: 'express-validator is a set of middlewares that wraps validator.js, allowing you to validate and sanitize user input in Express.js applications. It helps ensure that incoming data meets specific criteria before processing.',
    codeExample: `const { body, validationResult } = require('express-validator');
app.post('/user', [
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Proceed with user creation
});`
  },
  {
    id: 'node-74',
    category: 'NodeJS',
    title: 'What is the purpose of the helmet-csp module in Node.js?',
    answer: 'helmet-csp is a middleware for setting Content Security Policy (CSP) headers in Express.js applications. It helps prevent cross-site scripting (XSS) and other code injection attacks.',
    codeExample: `const helmet = require('helmet');
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", 'example.com']
  }
}));`
  },
  {
    id: 'node-75',
    category: 'NodeJS',
    title: 'What is the purpose of the express-fileupload module in Node.js?',
    answer: 'express-fileupload is a middleware for handling file uploads in Express.js applications. It simplifies the process of handling file uploads and provides easy access to uploaded files.',
    codeExample: `const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.post('/upload', (req, res) => {
  if (!req.files) {
    return res.status(400).send('No files were uploaded.');
  }
  const sampleFile = req.files.sampleFile;
  sampleFile.mv('/somewhere/on/your/server/filename.jpg', (err) => {
    if (err) return res.status(500).send(err);
    res.send('File uploaded!');
  });
});`
  },
  {
    id: 'node-76',
    category: 'NodeJS',
    title: 'What is the purpose of the express-async-handler module in Node.js?',
    answer: 'express-async-handler is a middleware for handling asynchronous route handlers in Express.js. It simplifies error handling for async functions by automatically passing errors to the next middleware.',
    codeExample: `const asyncHandler = require('express-async-handler');
app.get('/async', asyncHandler(async (req, res) => {
  const data = await someAsyncFunction();
  res.send(data);
}));`
  },
  {
    id: 'node-77',
    category: 'NodeJS',
    title: 'What is the purpose of the mongoose-unique-validator module in Node.js?',
    answer: 'mongoose-unique-validator is a Mongoose plugin that adds pre-save validation for unique fields within a schema. It helps ensure that duplicate values are not saved in the database.',
    codeExample: `const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});
userSchema.plugin(uniqueValidator);`
  }
];