const { DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class SocialLink extends Model {};

SocialLink.init(
    {
        GroupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        SocialLink: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableNames: true,
        underscored: true,
        modelName: 'SocialLink',
    }
);

module.exports = SocialLink;
