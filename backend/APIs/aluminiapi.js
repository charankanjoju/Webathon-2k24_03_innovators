const exp=require('express')
const aluminiapp=exp.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
//Create new alumini
aluminiapp.post('/new-alumini',async(req,res)=>{
    const alumini=req.app.get('alumini')
    let newAlumini=req.body
    let dbuser=await alumini.findOne({username:newAlumini.username})
    if(dbuser!=null){
        res.send({message:"Alumini already existed"})
    }else{
        let hashedpwd=await bcryptjs.hash(newAlumini.password,6)
        newAlumini.password=hashedpwd
        await alumini.insertOne(newAlumini)
        res.send({message:"New Alumini created"})
    }
})
//Login Alumini
aluminiapp.post('/login',async(req,res)=>{
    const alumini=req.app.get('alumini')
    const userCredObj=req.body;
    let dbuser=await alumini.findOne({username:userCredObj.username})
    if(dbuser===null){
        res.send({message:"Invalid username"})
    }else{
        let status=await bcryptjs.compare(userCredObj.password,dbuser.password)
        if(status===false){
            res.send({message:"Invalid password"})
        }else{
        let encodedToken=jwt.sign({username:dbuser.username},'abcdef',{expiresIn:20})
        res.send({message:"login success",token:encodedToken,user:dbuser})
        }
    }
})
//Add jobs available
aluminiapp.post('/post-job',async(req,res)=>{
    const jobs=req.app.get('jobs')
    let newJob=req.body
    await jobs.insertOne(newJob)
    res.send({message:"New job posted"})
})
//Add events
aluminiapp.post('/addEvent',async(req,res)=>{
    const events=req.app.get('events')
    let newEvent=req.body
    await events.insertOne(newEvent)
    res.send({message:"New event added successfully"})
})
module.exports=aluminiapp