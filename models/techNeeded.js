const { DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class TechNeeded extends Model {}

TechNeeded.init(
    {
        GroupId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Tech: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableNames: true,
        underscored: true,
        modelName: 'TechNeeded',
    }
)
module.exports = TechNeeded;