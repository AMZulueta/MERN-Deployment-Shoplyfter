const User = require('../models/user.models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secret = "I can't believe this key is so secret!";

module.exports = ({
    register: (req, res) => {
        User.create(req.body)
            .then((newUser) => {
                const userToken = jwt.sign({
                    id: newUser._id
                }, process.env.SECRET_KEY);
                
                res
                    .cookie("usertoken", userToken, {httpOnly: true})
                    .json({message: "Successful registration!", user: newUser});
            })
            .catch((err) => res.status(400).json({message: "There is a problem with registration", err}))
    }, 
    findAllUsers: (req, res) => {
        User.find()
            .then((allUsers) => res.json(allUsers))
            .catch((err) => res.status(400).json({message: "Something went wrong during find", error: err}))
    }, 
    login: async (req, res) => {
        const user = await User.findOne({email: req.body.email})

        if(!user) {
            return res.status(400).json({message: "Invalid login"})
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password)

        if(!correctPassword) {
            return res.status(400).json({message: "Invalid login"})
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);

        res
            .cookie("usertoken", userToken, {httpOnly: true})
            .json({message: "Success!"});
    }, 
    logout: (req, res) => {
        res.clearCookie("usertoken");
        res.sendStatus(200);
    }, 
    deleteUsers: (req, res) => {
        User.deleteMany({})
            .then((deletedUsers) => res.json(deletedUsers))
            .catch((err) => res.status(400).json({message: "Something went wrong during delete", error: err}))
    }
});