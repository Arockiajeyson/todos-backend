const mongoose=require('mongoose')
const express =require('express')
const bodyParser=require('body-parser')
const Schema= mongoose.Schema
const app = express()
app.use(express.json())
const  model = new Schema({
    id:Number,
    description:{type:String}
})
const userSchme = mongoose.model('Todos',model)
app.use(bodyParser.json())
app.get('/geting',async (req,res)=>{
    try {
        const finding=await userSchme.find()
        return res.status(200).json(finding)
    } catch (error) {
        return res.status(500).json(error)
    }
})
app.post('/posting',async(req,res)=>{
    try {
        const data=await userSchme.create({
            id:req.body.i,
            description:req.body.store})
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
})
app.post('/editing',async(req,res)=>{
    try {
        console.log(req.body)
        const data=await userSchme.updateOne({id:req.body.ids},{description:req.body.state})
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
})
app.post('/deleting',async(req,res)=>{
    try {
        console.log(req.body)
        const data=await userSchme.deleteOne({id:req.body.ids})
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
})
module.exports=app