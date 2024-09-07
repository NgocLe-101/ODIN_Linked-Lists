export class Node {
  #_val;
  #_next;
  constructor(val) {
    this.#_val = val;
    this.#_next = null;
  }

  get next() {
    return this.#_next;
  }

  set next(node) {
    this.#_next = node;
  }

  set value(val) {
    this.#_val = val;
  }

  get value() {
    return this.#_val;
  }
}
