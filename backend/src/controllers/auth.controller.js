import User from "../models/User.js";
import jwt from "jsonwebtoken";
export async function signup(req, res) {
  const { email, password, fullname } = req.body;
  try {
    if (!email || !fullname || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must contain atleast 6 charcters",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const exsistingUser = await User.findOne({email});
    if(exsistingUser){
        return res.status(400).json(
            {
                message:"This email is already in use , please use a different email"
            }
        );
    }

    const idx = Math.floor(Math.random() * 100 ) + 1;
    const randomAvatar  = `https://avatar.iran.liara.run/public/${idx}.png`

    const newUser = new User.create({
        email,
        fullname,
        password,
        profilePic: randomAvatar
    })

    
  } catch (error) {}
}
export function login(req, res) {
  res.send("Login Route");
}
export function logout(req, res) {
  res.send("Logout Route");
}
