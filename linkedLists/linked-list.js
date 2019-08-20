'use strict';

const Node = require('./node');

class LinkedList {
  constructor(){
    this.head = null;
  }

  insert(value){
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    return this;
  }
  
  includes(value){
    let current = this.head;

    while(current !== null){
      if(current.value === value){
        return true;
      }
      else{
        current = current.next;
      }
      return false;
  }
}

  toString(){
    let current = this.head;
    let values = '';
    while(current !== null){
      values = values + current.value
      current = current.next;
    }
    return values;
  }

  traverse() {
   let current = this.head;
   while(current !== null) {
     console.log(current.value);
     // SOMETHING ELSE n_n
     current = current.next;
   }
  }
}

module.exports = LinkedList;