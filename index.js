const express=require('express')
const app=express()
app.use(express.json())
const cors=require("cors")
app.use(cors())
const PORT = process.env.PORT || 8080

app.post('/base64',async(req,res)=>{
try {
    const pan=req.body.pan
    const upCasePan=pan.toUpperCase()
    const data= btoa(upCasePan)
    res.status(200).send({pan:data})

} catch (error) {
    console.log(error)
}
})

app.listen(PORT,async()=>{
    console.log("listening")
})