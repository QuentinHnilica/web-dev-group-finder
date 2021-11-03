const { DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        //Model attributes
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        technologies: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 5,
            }
        },
        description: {
            type: DataTypes.TEXT
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableNames: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Project;