const Crew = require("./crew")

describe('Crew class',() =>{
    test('has a name',() =>{
        const testName = new Crew("Lamin")
        expect (testName.name).toBe("Lamin")
    })
})