'use strict';

const LinkedList = require('../linked-list');

describe('testing all linkLists methods made', ()=>{

    it('Can instantiate an empty list',()=>{
        const linkedList = new LinkedList();
        linkedList.insert(null);
        expect(linkedList.head.value).toEqual(null);
        console.log(linkedList)
    })

    it('Can properly insert into linked list and check that head is pointed to first node',()=>{
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(8);
        expect(linkedList.head.value).toEqual(8);
    })

    it('can properly insert multiple nodes into the linkedlist',()=>{
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(8);
        linkedList.insert(2);
        expect(linkedList.head.value).toEqual(2);
        expect(linkedList.head.next.value).toEqual(8);
        expect(linkedList.head.next.next.value).toEqual(1);
    })

    it('returns true when finding a value within the linked list that exist',()=>{
        const linkedlist = new LinkedList();
        linkedlist.insert(1);
        expect(linkedlist.includes(1)).toEqual(true);
    })

    it('returns false when value searched for isnt there', ()=>{
        const linkedlist = new LinkedList();
        linkedlist.insert(1);
        expect(linkedlist.includes(2)).toEqual(false);
    })
});