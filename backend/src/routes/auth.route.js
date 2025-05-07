import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hello and Welcome to ChitChatz");
})
router.get("/signup",(req,res)=>{
    res.send("SignUp Route");
})
router.get("/login",(req,res)=>{
    res.send("Login Route");
})
router.get("/logout",(req,res)=>{
    res.send("Logout Route");
})

export default router