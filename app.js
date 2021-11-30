const express=require("express")
const app = express()
const PORT=9000
const mongoose=require("mongoose")

require("./models/individual");
require("dotenv").config();
mongoose.model("individual")

app.use(express.json())
app.use(require("./register"))

mongoose.connect(process.env.MONGOURI);
mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})
mongoose.connection.on("error",(err)=>{
    console.log("error while connectin to mongodb",err)
})


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

