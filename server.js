const express = require("express")
const path = require("path")
const {user} = require("D:/webstorm/User")
const {products} = require("D:/webstorm/products")

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ecommercedb",
    {useNewUrlParser: true, autoIndex: false},
    (err) => {

        if (!err) console.log("Connection to db ...")
        else console.log(err.message)
    })


const app = express()

app.use(express.json())


//signUp
app.post("/api/v1/user/signup", (req, res) => {
    const username = req.body["username"]
    const password = req.body["password"]
    const email = req.body["email"]


    const newUser = {
        username: username,
        password: password,
        email: email,
    }

    user.create(newUser).then(response => {
        console.log(response)
        res.status(201).send({
            message: "user created"
        })
    }).catch(e => {
        console.log(e.message)
    })

})

//login
app.post("/api/v1/user/login", (req, res) => {
    const username = req.body["username"]
    const password = req.body["password"]

   user.findOne({username:username,password:password}).then(response =>{
      if(response != null)
          res.status(200).sed(response)
              else
                  res.status(401).send({"message":"username or password are wrong"})
   })
})



//add products
app.post("/api/v1/products/addProducts", (req, res) => {
    const name = req.add("name")
    const price = req.add("price")
    const brand = req.add("brand")



    const addProducts = {
        name: name,
        price: price,
        brand: brand,
    }

    products.create(addProducts).then(response => {
        console.log(response)
        res.status(201).send({
            message: "add products"
        })
    }).catch(e => {
        console.log(e.message)
    })

})


//call by name & price
app.post("/api/v1/products/callBy/name&price", (req, res) => {
    const name = req.body["name"]
    const price = req.body["price"]

    products.findOne({name:name,price:price}).then(response =>{
        if(response != null)
            res.status(200).send(response)
        else
            res.status(401).send({"message":"username or password are wrong"})
    })
})

//call by brand
app.post("/api/v1/products/callBy/brand", (req, res) => {
    const brand = req.body["brand"]

    products.findOne({brand:brand}).then(response =>{
        if(response != null)
            res.status(200).send(response)
        else
            res.status(401).send({"message":"brand not found"})
    })
})







app.listen(9800, (err) => {
    if (!err) console.log("server run on port 9800")
})