const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");

// Using Promise
// router.get ('/',(req,res)=>{
//     res.send("Hello world from the server router js");
// });

// router.post('/register',(req,res)=>{
//     const {name,email,phone,work,password,cpassword } = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"Plz fill all the fields!"});

//     }
//     User.findOne({email:email})
//         .then((userExist) =>{
//             if(userExist){
//              return res.status(422).json({error:"Email already exist"});
//             }
//             const user = new User({name,email,phone,work,password,cpassword});

//             user.save().then(()=>{
//                 res.status(201).json({message:"user registered successfully"});
//             }).catch((err) => res.status(500).json({error:"Failed to register"}));
//         }).catch(err=>{console.log(err);});

// });

//Usind=g Async-Await
// REGISTER Route
router.post("/register", async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Plz fill all the fields!" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password does not match" });
    } else {
      const user = new User({ name, email,  password, cpassword });
      await user.save();

      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//Login ROute

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "Plz fill all the fields!" });
    }
    const userLogin = await User.findOne({ email: email });
    //console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken",token,{
        expires: new Date(Date.now()+ 25892000000),
        httpOnly : true
      });

      if (!isMatch) {
        res.status(400).json({ message: "Invalid credentials pass" });
      } else {
        res.json({ message: "user signin successfully" });
      }
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
