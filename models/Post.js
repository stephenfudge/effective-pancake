// import stuff
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

//  defines table columns and how to allow data to be collected
Post.init( 
    {
        // id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // user id column
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // title column
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // post content column
        post_content: {
            type: DataTypes.TEXT,
            allowNull: true
        },
    },
        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
    );
    
module.exports = Post;