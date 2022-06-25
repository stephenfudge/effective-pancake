const sequelize = require ('../config/connection');
const seedUser = require ('./user-seed');
const seedPost = require ('./post-seed');
const seedComment = require ('./comment-seed');



const seeds = async () => {
    await sequelize.sync({  force: true  });
    console.log('database synced');

    await seedUser();
    console.log('Users seeded');

    await seedPost();
    console.log('Posts seeded');

    await seedComment();
    console.log('Comments seeded');

    process.exit(0);
};

seeds();
