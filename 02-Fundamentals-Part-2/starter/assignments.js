'use strict';
function describeCountry(country, population, capitalCity) {
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