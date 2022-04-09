import express from "express";

const csvRouter = express.Router();

csvRouter.post("/upload", (req,res) => {
    console.log(req.files)
    
});

export { csvRouter };
