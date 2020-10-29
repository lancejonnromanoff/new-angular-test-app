var faker = require('faker');

var database = { persons: []};

for (var i = 1; i<= 100; i++) {
  database.persons.push({
    id: i,
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    ssn: faker.phone.phoneNumber('#########')
  });
}

console.log(JSON.stringify(database));
