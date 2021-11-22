const Person = require("./person")
const Bag = require('./Bag')

describe('Person', () =>{
    test('has a name', () =>{
        const testPerson = new Person("Lamin")
        expect(testPerson.name).toBe('Lamin')

    })

    describe('Bag', () =>{
        test('has a bag', () =>{
            const testBag = new Bag(10)
            expect(testBag.weight).toBe(10)
    
        })


})