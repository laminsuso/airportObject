const Person = require('./person')
class Crew extends Person{
    constructor(name,bag,position, staffNumber){
        super(name,bag)
        this.position = position
        this.staffNumber = staffNumber
    }
}
module.exports = Crew