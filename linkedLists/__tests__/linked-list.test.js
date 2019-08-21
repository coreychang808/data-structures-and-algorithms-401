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

    it('Can successfully add a node to the end of the linked list', ()=>{
        const linkedList = new LinkedList();
        linkedList.insert('corey');
        linkedList.insert('gwen');
        linkedList.insert('chloe');
       expect(linkedList.head.next.next.value).toEqual('corey');
        expect(linkedList.head.next.next.next).toEqual(null);
    })

    it('Can successfully add multiple nodes to the end of a linked list',()=>{
        const linkedList = new LinkedList();
        linkedList.append('corey');
        linkedList.append('gwen');
        linkedList.append('chloe');
        expect(linkedList.head.value).toEqual('corey');
        expect(linkedList.head.next.value).toEqual('gwen');
        expect(linkedList.head.next.next.value).toEqual('chloe');
        expect(linkedList.head.next.next.next).toEqual(null);
    });

    it('Can successfully insert a node before a node located i the middle of a linked list',()=>{
        const linkedList = new LinkedList();
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(4);
      linkedList.append(5);
      linkedList.insertBefore(4, 'middle');
      expect(linkedList.head.next.next.value).toEqual('middle');
      expect(linkedList.head.next.next.next.value).toEqual(4);
    })

    it('Can successfully insert a node before the first node of a linked list',()=>{
        const linkedList = new LinkedList();
        linkedList.append('value');
        linkedList.insertBefore('value', 'insert');
        expect(linkedList.head.value).toEqual('insert');
        expect(linkedList.head.next.value).toEqual('value');
        console.log(linkedList);
    })
    
    it('Can successfully insert a node after the last node of the linked list',()=>{
        const linkedList = new LinkedList();
        linkedList.append('corey');
        linkedList.append('gwen');
        linkedList.insertAfter('gwen', 'chloe');
        expect(linkedList.head.next.value).toEqual('gwen');
        expect(linkedList.head.next.next.value).toEqual('chloe');
        expect(linkedList.head.next.next.next).toEqual(null);
    })
});