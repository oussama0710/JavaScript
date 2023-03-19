const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
// remember to use import and NOT require
// we can create a function to return a random / fake "Product"
app.listen( port, () => console.log(`Listening on port: ${port}`) );
const createUser = () => {
    const newFakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id:faker.database.mongodbObjectId() 
    };
    return newFakeUser;
};
const createCompany = () => {
    const newFakeCompany = {
        _id:faker.database.mongodbObjectId(),
        name: faker.database.mongodbObjectId(),
        adress:  { 
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.buildingNumber(),
            country: faker.address.country() 
        },
    };
    return newFakeCompany;
};
    

app.get("/api/users/new", (req, res) => {
    res.json( createUser() );
})
app.get("/api/companies/new", (req, res) => {
    res.json( createCompany() );
})
app.get("/api/user/company", (req, res) => {
    res.json(createCompany() );
    res.json( createUser());

})
// Company Object
// _id
// name
// address
    // street
    // city
    // state
    // zipCode
    // country