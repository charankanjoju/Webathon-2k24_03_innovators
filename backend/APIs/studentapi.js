const exp=require('express')
const studentapp=exp.Router()
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
//Create student
studentapp.post('/new-student',async(req,res)=>{
    const students=req.app.get('students')
    let newStudent=req.body
    let dbuser=await students.findOne({username:newStudent.username})
    if(dbuser!=null){
        res.send({message:"User already existed"})
    }else{
        let hashedpwd=await bcryptjs.hash(newStudent.password,6)
        newStudent.password=hashedpwd
        await students.insertOne(newStudent)
        res.send({message:"New User created"})
    }
})
//login student
studentapp.post('/login',async(req,res)=>{
    const students=req.app.get('students')
    const userCredObj=req.body;
    let dbuser=await students.findOne({username:userCredObj.username})
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
///search operation
studentapp.get('/search-alumini/:username',async(req,res)=>{
    const alumini=req.app.get('alumini')
    let namefromurl=req.params.username
    let userfromdb=await alumini.findOne({username:namefromurl})
    res.send({message:"Alumini","payload":userfromdb.username})
})
//search by skill
studentapp.get('/search/:skill',async(req,res)=>{
    const alumini=req.app.get('alumini')
    let skillfromurl=req.params.skill
    let aluminifromdb=await alumini.findOne({
        skills:{$in:[skillfromurl]}
    })
    res.send({message:"Alumini Based on Skill","payload":aluminifromdb})
})
//Get all the jobs available
studentapp.get('/getjob',async(req,res)=>{
    const jobs=req.app.get('jobs')
    let allJobs=await jobs.find().toArray()
    res.send({message:"All Jobs","payload":allJobs})
})
//Get all the events available
studentapp.get('/getEvents',async(req,res)=>{
    const events=req.app.get('events')
    let allEvents=await events.find().toArray()
    res.send({message:"All events","payload":allEvents})
})
module.exports=studentapp