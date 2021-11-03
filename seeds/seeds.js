const sequelize = require("../config/connection")
const { User, Project, Posts } = require("../models")

const userData = require("./userData")
const projectData = require("./projects")
const postData = require("./postData")

const start = async () =>{
    await sequelize.sync({ force: true });
    const seedUsers =  await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      })
    const seedProjects = await Project.bulkCreate(projectData, {
        individualHooks: true,
        returning: true,
      })

    const seedPosts = await Posts.bulkCreate(postData, {
      individualHooks: true,
      returning: true,
    })

    process.exit(0);
}

start()