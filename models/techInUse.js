const { DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class TechInUse extends Model {}

TechInUse.init(
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
        modelName: 'TechInUse',
    }
)
module.exports = TechInUse;