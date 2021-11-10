const { DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class GroupUsers extends Model {};

GroupUsers.init(
    {
        GroupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableNames: true,
        underscored: true,
        modelName: 'GroupUsers',
    }
);

module.exports = GroupUsers;
