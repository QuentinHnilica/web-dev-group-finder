const { DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class Posts extends Model {};

Posts.init(
    {
        PostId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        GroupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        UsersID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PostContent:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableNames: true,
        underscored: true,
        modelName: 'Posts',
    }
);
module.exports = Posts;
