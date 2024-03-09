import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import User from "./models/User.js"
import veg from "./constants/veg.js"
import breakfast from "./constants/breakfast.js"
import family from "./constants/family.js"
import pizza from "./constants/pizza.js"
const app = express();
app.use(cors())
app.use(express.json())

// db connection
mongoose.connect("mongodb+srv://nandyshreya2804:2d97baSriwWrVbNp@cluster0.wtfaskc.mongodb.net/Zomato?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Mongodb connected"))
.catch((err) => console.log(err))

app.get("/api/user", async (req, res) => {
   await User.find()
   .then((users) => res.json(users))
   .catch((err) => console.log(err))
})

app.post("/api/user", async (req, res) => {
    await User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.error(err))
})

app.post("/api/user/auth", async (req, res) => {
    await User.findOne(req.body)
    .then((user) => {
        if(user){
            res.json("success")
        }
        else{
            res.json("failed")
        }
    })
    .catch((err) => console.log(err))
})

app.get("/api/menu/veg", (req, res) => {
    res.json(veg)
})
app.get("/api/menu/family", (req, res) => {
    res.json(family)
})
app.get("/api/menu/breakfast", (req, res) => {
    res.json(breakfast)
})
app.get("/api/menu/pizza", (req, res) => {
    res.json(pizza)
})

const PORT = "3000"

app.listen(PORT, () => {
    console.log(`server listen on http://localhost:${PORT}/`)
})