const express=require('express')

const db=require('mongoose')

const app =express()

const cors =require('cors')

app.use(cors())

db.set("strictQuery",false)

app.use('/users', require('./fecting'))

app.use(express.json())


app.listen(3000,async()=>{
   await db.connect('mongodb+srv://Aro:aro123@arockiajeyson.aswzaya.mongodb.net/?retryWrites=true&w=majority')
    console.log('connected')
})