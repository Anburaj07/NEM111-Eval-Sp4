const express=require("express")
const { auth } = require("../middleware/auth.middleware")
const { PostModel } = require("../models/post.model")
const postRouter=express.Router()

postRouter.use(auth)

postRouter.get("/",async(req,res)=>{
    const query=req.query;
    query.userID=req.body.userID;
    try {
        const posts=await PostModel.find(query)
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({error})
    }
})

postRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try {
        const post = new PostModel(payload)
        await post.save()
        res.status(200).json({msg:"A new post has been created"})
    } catch (error) {
        res.status(400).json({error})
    }
})

postRouter.patch("/update/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const payload=req.body;
        let post =await PostModel.findById({_id:id})

        if(post.userID==req.body.userID){
            await PostModel.findByIdAndUpdate({_id:id},payload)
            res.status(200).json(({msg:`Post with ${id} updated`}))
        }else{
            res.status(400).json({msg:"You dont't have the access to update this post"})
        }
    } catch (error) {
        res.status(400).json({error})
    }
})

postRouter.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        let post =await PostModel.findById({_id:id})

        if(post.userID==req.body.userID){
            await PostModel.findByIdAndDelete({_id:id})
            res.status(200).json(({msg:`Post with ${id} deleted`}))
        }else{
            res.status(400).json({msg:"You dont't have the access to delete this post"})
        }
    } catch (error) {
        res.status(400).json({error})
    }
})
module.exports={postRouter}