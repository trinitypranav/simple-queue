# Queue implementation for JavaScript

Code snippet as follows:

```
const Queue = require("./index");

// create new instance of Queue
const queue = new Queue();

// adding new elements inside queue
queue.enqueue("apple");
queue.enqueue("banana");

// getting complete queue
console.log(queue.getQueue());

// getting length of the queue
console.log(queue.length);

// peek the queue
console.log(queue.peek());
```
