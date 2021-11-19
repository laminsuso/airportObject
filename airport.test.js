const airport = require('./airport')

describe('airport class', () =>{
    test('has a terminal', () =>{
        const testTerminal = new airport("terminal")
        expect (testTerminal.terminal).toBe("terminal")
    })
})