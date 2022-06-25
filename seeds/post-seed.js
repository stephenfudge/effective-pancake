// import Post model
const { Post } = require('../models');

const postData = [
    {
        user_id:  1,
        title: "test title",
        post_content: "here's test content 1" 
    },
    {
        user_id:  4,
        title: "another title",
        post_content: "this is wild!" 
    },
    {
        user_id:  2,
        title: "can you believe it?",
        post_content: "i've learned so much so far!" 
    },
    {
        user_id:  3,
        title: "test",
        post_content: "so hard to think of test content" 
    },
]




// setting variable to export data
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;