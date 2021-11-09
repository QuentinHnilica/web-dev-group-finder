const router = require("express").Router();
const { User, Project } = require("../models");
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

    console.log(req.params.id);
    try{
        const projectData = await Project.findOne({
            where: {
                id: req.params.id
            }
        });

        const project = projectData.get({ plain: true });
        if (!projectData) {
            res.status(404).json({ message: 'No project found with this id!' });
            return;
        };

        res.render('group', project);
    }catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
