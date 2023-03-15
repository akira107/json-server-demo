const faker = require('faker');
const fs = require("fs");

//ser localle to use Vietnamese
faker.locale = 'vi';

//ramdom data
console.log(faker.commerce.departName());
console.log(faker.commerce.productName());
console.log(faker.commerce.departName());
console.log(faker.commerce.productDescriptionName());

console.log(faker.ramdom.uuid());
console.log(faker.image.imageUrl());
console.log(faker.name.findName());


//IFFE
(()=>{
    //prepare db object
    const db = {
        products : [],
        singleproducs : [],
        profile: { 
            name : "akria",
        },
    };
    //write db object to db.json
    fs.writeFile('db.json', JSON.stringify(db), ()=>{
console.log("Generate data successfully=))")
    });
})();