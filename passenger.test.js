const Passenger = require('./passenger')
describe('Passenger class', () =>{
    test('Has a name', () =>{
        const testname = new Passenger("name")
        expect (testname.name).toBe("name")
    })
})