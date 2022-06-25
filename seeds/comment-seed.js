// import Comment model
const { Comment } = require('../models');

const commentData = [{
        user_id: 1,
        post_id: 2,
        comment_text: "best tech blog ever"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "this is so cool"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "WOAH!"
    },
    {
        user_id: 3,
        post_id: 6,
        comment_text: "i guess i have to agree with this"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "love this feature"
    },
    {
        user_id: 4,
        post_id: 5,
        comment_text: "good work!"
    },

]

// create variable to export data
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;