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