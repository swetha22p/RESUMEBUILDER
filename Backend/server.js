const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
const PORT = 8080
app.listen(PORT,() => {
    console.log(`server is running on PORT ${PORT}...`)
})

// mongodb database connected
const mongoose = require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/ResumeBuilder", {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(() => {
    console.log('Database connected..')
}) 

const resume = require('./resume')

app.post('/add-resume', async(req,res) => {
    const ResumeBuild = new resume(req.body)
    try{
        await ResumeBuild.save()
        res.status(201).json({
            status: 'Success',
            data : {
                ResumeBuild
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

// create Get route
app.get('/get-resume', async (req,res) => {
    const ResumeBuild = await resume.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                ResumeBuild
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

//user schema 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/Login",(req,res)=>{
    const {email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});
app.post("/Register",(req,res)=>{
    console.log(req.body) 
    const {name,email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new User({name,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })


}) 