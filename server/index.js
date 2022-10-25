const express=require('express')
const app=express()
const cors=require('cors')
const mongoose=require('mongoose')
const User=require('./models/user')
// const jwt=require('jsonwebtoken')
 
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb://localhost:27017/ebags')

// app.get('/hello',(req,res)=>{
//     res.send('hello world')
// })
app.post('/api/register',async (req,res)=>{
    // res.status(200).json({msg:req.body})
    try{
        const user=await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }) 
        res.json({status: ok})
    }catch(err){
        res.json({status: 'error',error:'Duplicate email or username'})
    }
    // res.json({status:'ok'})
})

app.post('/api/login',async (req,res)=>{
    // res.status(200).json({msg:req.body})
    const user=await User.findOne({
        name:req.body.name,
        password:req.body.password
    })
    if (user){
        return res.json({status:'ok',user:true})
    }
    else{
        return res.json({status:'error',user:false})
    }
})

app.listen(5000,()=>{
    console.log('Server running at 5000')
})