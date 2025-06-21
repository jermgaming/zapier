import { Router } from "express";
const router= Router();

router.post("/signup",(req,res)=>{
    console.log("signup handler");
})

router.post("/signin",(req,res)=>{
    console.log("signin handler");
})


router.get("/user",authMiddleware,(req,res)=>{
    console.log("user handler")
})

router.get