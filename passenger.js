const Person = require('./person')
class Passenger extends Person{
    constructor(name, bags, passportNumber, seatNumber){
        super(name, bags)
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
    }

    callAttendant() {
        console.log('Excuses me, Hay there!')
    }

}
module.exports = Passenger