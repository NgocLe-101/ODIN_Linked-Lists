import { Node } from "./Node.js";

export default class LinkedList {
  #_head;
  #_tail;
  #_size;
  constructor() {
    this.#_head = null;
    this.#_tail = null;
    this.#_size = 0;
  }
  append(value) {
    const node = new Node(value);
    this.#_size++;
    if (this.#_head === null) {
      this.#_head = node;
      this.#_tail = node;
      return;
    }
    this.#_tail.next = node;
    this.#_tail = node;
  }

  prepend(value) {
    const node = new Node(value);
    this.#_size++;
    if (this.#_head === null) {
      this.#_head = node;
      this.#_tail = node;
      return;
    }
    node.next = this.#_head;
    this.#_head = node;
  }
  size() {
    return this.#_size;
  }

  head() {
    return this.#_head;
  }

  tail() {
    return this.#_tail;
  }

  at(index) {
    if (index < 0) return null;
    if (index === 0) return this.head();
    if (index === this.size() - 1) return this.tail();
    let iteratorNode = this.head();
    while (index--) {
      iteratorNode = iteratorNode.next;
    }
    return iteratorNode;
  }
  pop() {
    let iteratorNode = this.head();
    if (this.#_size <= 0) return;
    if (this.#_size === 1) {
      this.#_head = null;
      this.#_tail = null;
      this.#_size = 0;
      return;
    }
    while (iteratorNode.next !== this.#_tail) {
      iteratorNode = iteratorNode.next;
    }
    this.#_tail = iteratorNode;
    this.#_size--;
  }
  contains(value) {
    let iteratorNode = this.head();
    while (iteratorNode !== null) {
      if (iteratorNode.value === value) {
        return true;
      }
      iteratorNode = iteratorNode.next;
    }
    return false;
  }
  find(value) {
    let iteratorNode = this.head();
    let index = 0;
    while (iteratorNode !== null) {
      if (iteratorNode.value === value) {
        return index;
      }
      iteratorNode = iteratorNode.next;
      index++;
    }
    return null;
  }
  toString() {
    if (this.#_head === null) {
      return "null";
    }
    let iteratorNode = this.head();
    let str = `( ${iteratorNode.value} )`;
    iteratorNode = iteratorNode.next;
    while (iteratorNode !== null) {
      str += ` -> ( ${iteratorNode.value} )`;
      iteratorNode = iteratorNode.next;
    }
    str += " -> null";
    return str;
  }
  insertAt(value, index) {
    if (index <= 0) {
      this.prepend(value);
    } else if (index >= this.#_size - 1) {
      this.append(value);
    } else {
      let iteratorNode = this.head();
      let iteratorIndex = 0;
      while (iteratorIndex < index - 1) {
        iteratorIndex++;
        iteratorNode = iteratorNode.next;
      }
      const node = new Node(value);
      const nextNode = iteratorNode.next;
      iteratorNode.next = node;
      node.next = nextNode;
    }
  }
  removeAt(index) {
    if (index <= 0) {
      this.#_head = this.#_head.next; // pop head
    } else if (index >= this.#_size - 1) {
      this.pop(); // pop tail
    } else {
      let iteratorNode = this.head();
      let iteratorIndex = 0;
      while (iteratorIndex < index - 1) {
        iteratorIndex++;
        iteratorNode = iteratorNode.next;
      }
      iteratorNode.next = iteratorNode.next.next;
    }
  }
}
