const Plane = require('./airplane')

describe('Plane class', () =>{
    test('Has a seat', () =>{
        const testSeat = new Plane("seat")
        expect(testSeat.seat).toBe("seat")
    })
})
