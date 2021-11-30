const Airport = require('./airport')


describe('airport class', () =>{
    test('has a terminal', () =>{
        const testTerminal = new Airport("terminal")
        expect (testTerminal.name).toBe("terminal")
    })
    
    test('airports have a country', (done) => {
        const testAirport2 = new Airport("CDG")
        //run getInfo method
        testAirport2.getInfo((err, info) => {
        //log this airport info to console
        console.log(info)
        //expect error to be null
        expect(err).toBeNull()
        //expect the airport country to be FR
        expect(info.country).toEqual('FR')
        //end asynchrounous test
        done()
        })
    })
})