'use strict';

const LinkedList = require('../linked-list');

describe('testing all linkLists methods made', ()=>{

    it('insert() into list', () => {
        const linkedList = new LinkedList();
        linkedList.insert(5);
        expect(linkedList.head.value).toEqual(5);
        expect(linkedList.head.next).toEqual(null);
    });

    it('tests head property points to first node', ()=>{
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(3);
        expect(linkedList.head.value).toEqual(3);
        expect(linkedList.head.next.value).toEqual(1);
    });

    it('Can properly insert multiple nodes into the linked list',()=>{
        const linkedList = new LinkedList();
        linkedList.insert('hi');
        linkedList.insert('hola');
        linkedList.insert('aloha');
        expect(linkedList.head.value).toEqual('aloha');
        expect(linkedList.head.next.value).toEqual('hola');
        expect(linkedList.head.next.next.value).toEqual('hi');
    });

    it('Will return false when searching for a value in the linked list that does not exist',()=>{
        const linkedList = new LinkedList();
        linkedList.insert(1);
        linkedList.insert(2);
        linkedList.insert(3);
        expect(linkedList.includes('a')).toEqual(false);
        expect(linkedList.includes(null)).toEqual(false);
    })

    it('Can properly return a collection of all the values that exist in the linked list',()=>{
        const linkedList = new LinkedList();
        linkedList.insert('corey');
        linkedList.insert('chloe');
        linkedList.insert('gwen');
        expect(linkedList.toString()).toEqual('gwenchloecorey');
    })
});