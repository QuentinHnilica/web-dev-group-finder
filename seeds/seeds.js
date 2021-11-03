const sequelize = require("../config/connection")
const {User} = require("../models")

const userData = require("./userData")

const start = async () =>{
    await sequelize.sync({ force: true });
    const seedUsers =  await User.bulkCreate(userData)


    process.exit(0);
}

start()