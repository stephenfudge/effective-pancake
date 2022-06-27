// dependencies
const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', (req, res) => {
    Post.findAll({
            attributes: [
                'id',
                'title',
                'post_content'
            ],
            include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }]
        })
        .then(postData => req.json(postData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get post based on id
router.get('/:id', (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'post_content'
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(postData => {
            if (!postData) {
                res.status(404).json({
                    message: 'No post found with that ID'
                });
                return;
            }
            res.json(postData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// post with the auth.js shortcut
router.post('/', withAuth, (req,res) => {
    Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        user_id: req.session.user_id
    })
    .then(postData => res.json(postData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update given the id  with the auth.js shortcut
router.put('/:id', withAuth, (req,res) => {
    Post.update({
        title: req.body.title,
        post_content: req.body.post_content
    },
    {
        where: {
            id: req.params.id
        }
    })
    .then(postData => {
        if(!postData){
            res.status(404).json({ message: 'No post found with that ID' });
            return;
        }
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete given the id
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(postData => {
        if(!postData){
            res.status(404).json({ message: 'No post found with that ID' });
            return;
        }
        res.json(postData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router; 