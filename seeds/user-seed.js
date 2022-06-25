// import User model
const { User } = require('../models');

const userData = [
    {
       username: "bobby",
       email: "bobby@mail.com",
       password: "pass1" 
    },
    {
        username: "annie_",
        email: "annie@mail.com",
        password: "pass2"
    },
    {
        username: "mikey2",
        email: "mike@mail.com",
        password: "pass3"
    },
    {
        username: "sue",
        email: "sue@mail.com",
        password: "pass4"
    }
]

// setting variable to export data
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;