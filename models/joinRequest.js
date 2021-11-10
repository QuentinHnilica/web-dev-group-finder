const { DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class JoinRequest extends Model {};

JoinRequest.init(
    {
        GroupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        requestedTech:{
            type: DataTypes.STRING,
            allowNull: false
        },
        portfolio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        message:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableNames: true,
        underscored: true,
        modelName: 'JoinRequest',
    }
);

module.exports = JoinRequest;