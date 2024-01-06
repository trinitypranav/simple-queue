class Queue {
  constructor() {
    this.elements = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  enqueue(element) {
    this.elements[this.backIndex] = element;
    this.backIndex++;
    return element + " added";
  }
  dequeue() {
    const element = this.elements[this.frontIndex];
    delete this.elements[this.frontIndex];
    this.frontIndex++;
    return element;
  }
  peek() {
    return this.elements[this.frontIndex];
  }
  get length() {
    return this.backIndex - this.frontIndex;
  }
  getQueue() {
    return this.elements;
  }
}

module.exports = Queue;
