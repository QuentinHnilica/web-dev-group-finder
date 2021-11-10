const router = require("express").Router();
const { User, Project, GroupUsers, TechInUse, TechNeeded } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ["password"] },
            order: [["username", "ASC"]],
        });

        const users = userData.map((project) => project.get({ plain: true }));

        res.render("findGroup", {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
       
        res.status(500).json(err);
    }
});

router.get("login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/");
        return;
    }

    res.render("login");
});


router.get('/projects/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const projectData = await Project.findOne({
            where: {
                id
            }
        });

        const usersData = await GroupUsers.findAll({
           where: {
               group_id: id
           }
        });
        
        const techInUseData = await TechInUse.findAll({
            where: {
                group_id: id
            }
        });

        // const techNeededData = await TechNeeded.findAll({
        //     where: {
        //         group_id: id
        //     }
        // });

        const users = usersData.map((user) => user.get({ plain: true }));
        const techsInUse = techInUseData.map((techInUse) => techInUse.get({ plain: true }));
        // const techsNeeded = techNeededData.map((techNeeded) => techNeeded.get({ plain: true }));
        // console.log(techsNeeded);

        const project = projectData.get({ plain: true });
        if (!projectData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        };

        res.render('group', { project, users, techsInUse });
    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
