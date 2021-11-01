const { DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        //Model attributes
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate: {
                isEmail: {
                    msg: "Must be a valid email address",
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableNames: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;