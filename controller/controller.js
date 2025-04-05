import User from "../model/model.js";
async function createUser(req,res) {
    try {
        const inputresult = req.body;
        await User.create(inputresult);
        res.status(201).json({message:"User Created"});
    } catch (error) {
        console.log(error.message);
    }
    
}

 const getNote=async(req,res)=>{
    try {
        const response=await User.findAll();
        res.json(response);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({message:"Server error"});
    }
}

async function deleteNote(req,res) {
    try {
        const id=req.params.id
        await User.destroy(
            {
                where:{id}
            }
        )
        res.status(200).json({
            message:"User Deleted"
        })
    } catch (error) {
        console.log(error.message)
    }
    
}

async function updateNote(req,res) {
    try {
        const editData=req.body
        const id=req.params.id
        await User.update(editData,{
           where:{
            id
           }, 
        });
        res.status(200).json({
            message:"Note Updated"
        });
    } catch (error) {
        console.log(error.message)
    }
    
}

export {createUser,getNote,deleteNote,updateNote};