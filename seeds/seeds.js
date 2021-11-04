const sequelize = require("../config/connection")
const { User, Project, Posts, GroupUsers, SocialLink, TechInUse, techNeeded } = require("../models")

const userData = require("./userData")
const projectData = require("./projects")
const postData = require("./postData")
const groupUsers = require("./groupUsers")
const socialLinkData = require('./socialLink')
const techInUseData = require('./techInUse')
const techNeededData = require('./techNeeded')

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
    
    const seedGroupUsers = await GroupUsers.bulkCreate(groupUsers, {
      individualHooks: true,
      returning: true,
    })

    const seedSocialLink = await SocialLink.bulkCreate(socialLinkData, {
      individualHooks: true,
      returning: true,
    })

    const seedTechInUse = await TechInUse.bulkCreate(techInUseData, {
      individualHooks: true,
      returning: true,
    })

    const seedTechNeeded = await techNeeded.bulkCreate(techNeededData, {
      individualHooks: true,
      returning: true,
    })


    process.exit(0);
}

start()