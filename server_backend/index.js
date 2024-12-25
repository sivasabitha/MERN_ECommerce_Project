const express=require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel=require('./models/user')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post("/login",(req,res) => {
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user =>{
        if(user){
            if (user.password ===password){
                res.json("Success")
            }
            else {
                res.json("password is incorrect")
            }
        }
        else{
            res.json("No records are existed")
        }
    })
})
// app.post('/register', (req,res) => {
//     UserModel.create(req.body)
//     .then(user =>res.json(user))
//     .catch(err =>res.json(err))
// })

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    UserModel.create({ name, email, password })
        .then(user => res.json({ message: "User registered successfully", user }))
        .catch(err => res.status(500).json({ error: err.message }));
});


app.listen(3001, () => {
    console.log("Server is running")
})