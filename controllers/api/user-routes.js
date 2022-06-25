// dependencies
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get /api/users to get all users
router.get('/', (req,res) => {
    User.findAll({
        attributes: {exclude: ['password']}
    })
    .then(userData => res.json(userData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get /api/users/id to find a specific user based on id
router.get('/:id', (req,res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'title', 'posted_content']
            },
            {
                model: Comment,
                attributes: ['id', 'comment_text'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }
        ]
    })
    .then(userData => {
        if(!userData){
            res.status(404).json({ message: 'No user found with that ID' });
            return;
        }
        res.json(userData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post api/users to create a new user
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email, 
        password: req.body.password
    })
  
})