const express= require('express')
const route=require('./route/route')
const mongoose=require('mongoose')
const app=express()

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://sarwjeet424:96568437528p@cluster0.8tsocgw.mongodb.net/getbit',{useNewUrlParser:true})
.then(()=> console.log("MongoDB Connected"))
.catch((err)=>console.log(err))

app.listen(3000,function (){
    console.log("Connected to Port 3000")
})

app.use('/',route)