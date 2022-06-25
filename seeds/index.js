const sequelize = ('../config/connection');
const seedUser = ('./user-seed');
const seedPost = ('./post-seed');
const seedComment = ('./comment-seed');



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
