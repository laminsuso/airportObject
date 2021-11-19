const Bag = require('./Bag')

describe('Bag class', () => {
    test(' has a weight', ()=>{
        const testWeight = new Bag(16)
        expect(testWeight.weight).toBe(16)
    })
})