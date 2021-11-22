class airport{
    constructor(terminal){
        this.terminal = terminal
    }
}

class airplane extends airport{
    constructor(Terminal, seat, wings){
        this.wings = wings
    }

    Fly(){
        console.log(" I can fly with the help of my {this.wings}")
    }
}
module.exports = airport