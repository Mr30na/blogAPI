import { Router } from "express";
import addValidator from "../controller/addController.mjs";
import {fetchByID,fetchAllBlogs} from "../controller/getController.mjs";
import updateValidator from "../controller/updateController.mjs";
import deleteValidator from "../controller/deleteController.mjs";

const indexRouter = Router();

indexRouter.post("/", async (req, res) => {
  try {
    const blogs = await addValidator(req.body);
    res.status(201).json({msg:"blog created successfully",data:blogs});
  } catch {
    res.status(400).json({ msg: "something is missing in request body" });
  }
});

indexRouter.put("/:id",async(req,res)=>{
  try{
    const putResult = await updateValidator(req.params.id,req.body);
    res.status(200).json({msg:"document updated successfully",data:putResult});
  }catch(err){
    switch (err) {
      case 3000:
        res.status(404).json({msg:"blog not found",data:null})
        break;
    
      default:
        res.status(400).json({msg:"unexpected error",data:null})
        break;
    }
  }
})

indexRouter.delete("/:id",async(req,res)=>{
  try{
    const deletResult = await deleteValidator(req.params.id);
    res.status(204).json(deletResult)
  }catch(err){
    switch (err) {
      case 2000:
        res.status(404).json({msg:"blog not found",data:null})
        break;
    
      default:
        res.status(500).json({msg:"unexpected error",data:null})
        break;
    }
  }
})

indexRouter.get("/:id", async (req, res) => {
  try {
    const blog = await fetchByID(req.params.id);
    res.status(200).json(blog);
  } catch (err) {
    if (err === 1000) {
      return res.status(404).json({ msg: "blog not found" });
    }
    res.status(400).json({ msg: "something went wrong" });
  }
});

indexRouter.get("/",async (req,res)=>{
  try{
    const allBlogs = await fetchAllBlogs(req.query);
    res.status(200).json(allBlogs);
  }catch (err){
    res.status(400).json({msg:"something went wrong"})
  }
})
export default indexRouter;
