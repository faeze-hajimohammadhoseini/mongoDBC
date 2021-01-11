const express = require("express")
const e = require("express");
const {user} = require("../models/user");

const userRouter = express.Router()

const signUp = async (req, res) => {
    // const username = req.body["username"]
    // const password = req.body["password"]
    // const email = req.body["email"]
    const {username, password, email} = req

    const newUser = {
        username: username,
        password: password,
        email: email,
    }
    // #3
    const u = await user.create(newUser)
    u !== null ? res.status(201).send({
        message: "user create"
    }) : res.status(500).send({message: "server has problem"})

    // #2
    //
    // if(u !==null){ res.status(201).send({
    //     message : "user create"
    // })
    //
    // }else {
    //     console.log(e.message)
    // }


    // #1
    // user.create(newUser).then(response => {
    //     console.log(response)
    //     res.status(201).send({
    //         message: "user created"
    //     })
    // }).catch(e => {
    //     console.log(e.message)
    // })
}

userRouter.route("/signup")
    .post(signUp)


module.exports = {
    userRouter
}

