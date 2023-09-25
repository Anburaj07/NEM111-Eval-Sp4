const express=require("express")
const app=express()
// const PORT=8080;
app.use(express.json())

const cors=require("cors");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");
const { postRouter } = require("./routes/post.route");
app.use(cors({
    origin:"*"
}))

app.use("/users",userRouter)
app.use("/posts",postRouter)

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Base Point"})
})
app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("Connected to DB")
        console.log(`Server is Running at ${process.env.PORT}`)
    } catch (error) {
        console.log("Error while connectiong to DB")
        console.log(error)
    }
})