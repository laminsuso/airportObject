const Crew = require("./crew")
const Person = require("./person")

describe('Crew class', () => {
    test('crew has name', () => {
        const testCrew = new Crew('Anna')
        expect(testCrew.name).toBe('Anna')
    });

describe('Crew class', () => {
    test('crew has position', () => {
        const testCrew2 = new Crew('Anna', 2,'pilot')
        expect(testCrew2.position).toBe('pilot')
        });
    });
});

// test('drinking La Croix leads to having thirst info', () => {
//     drinkSomeLaCroix();
//     expect(thirstInfo()).toBeTruthy();
//   });