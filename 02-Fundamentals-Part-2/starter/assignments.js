'use strict';

/* function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const indonesian = describeCountry('Indonesian', 200, 'Jakarta');
const finland = describeCountry('Finland', 6, 'Helsinki');
const saudiArabian = describeCountry('Arab Saudi', 10, 'Riyadh');

console.log(indonesian);
console.log(finland);
console.log(saudiArabian);

function percentageWorld1(country, population) {
    let result = (population / 7900) * 100;
    return `${country} has ${population} million people, so it's about ${result}% of the world population`
}

const percentageIndonesian = percentageWorld1('Indonesian', 200);
console.log(percentageIndonesian);

const percentageWorld2 = function (country, population) {
    let result = (population / 7900) * 100;
    return `${country} has ${population} million people, so it's about ${result}% of the world population`
}

const percentageFinland = percentageWorld2('Finland', 6);
console.log(percentageFinland);

const percentageChina = percentageWorld2('China', 1441);
console.log(percentageChina)

const percentageWorld3 = (country, population) => {
    let result = (population / 7900) * 100;
    return `${country} has ${population} million people, so it's about ${result}% of the world population`
}

const percentageSaudiArabian = percentageWorld3('Saudi Arabia', 10);
console.log(percentageSaudiArabian) 
*/

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`Jonas has 3 friends, and his best friend is called ${jonas.friends[0]}`);
 */

/* 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is ${this.calcAge()} a-year old ${this.job}, and ${(this.hasDriversLicense ? 'he has a drivers license' : 'he has no drivers license' )}`
    }
};
console.log(getSummary()); 
 */

const populations = [10, 1441, 332, 83];

console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);

let percentages2 = [];

for(let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}