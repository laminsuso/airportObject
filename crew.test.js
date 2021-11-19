const Crew = require("./crew")

describe('Crew class',() =>{
    test('has a home base',() =>{
        const testhomeBase = new Crew("homeBase")
        expect (testhomeBase.homeBase).toBe("homeBase")
    })
})