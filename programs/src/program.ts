const id      = require('uuidv4')
const express = require('express')
const app     = express()

const port :number = 3000


app.get('/req',(req :Request, res :Response)=>{  
    return  res.json()
})

app.get('/res-json',(req :any, res :any)=>{
    return res.json({msg:'ok'})
})


app.get('/',(req, res)=>{
    return res.json({
        msg:'online'
    })
})


app.listen(port, ()=>{
    console.log(`online in port: ${port}`)
})




