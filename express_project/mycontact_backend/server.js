const express=require("express");
const cors = require('cors');

const dotenv=require("dotenv").config();
const mongoose=require("mongoose");
// const Contact=require("./models/contactModels")
// const User=require("./models/userModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const Sales=require("./model/salesRecordModel")
const connectDb=async()=>{
    try{
const connect=await mongoose.connect(process.env.CONNECTION_STRING)
console.log("Database connected",connect.connection.host,connect.connection.name)
    }catch(err){
        console.log(err)
        process.exit
    }
}

// const validateToken=async(req,res,next)=>{
// let token;
// let authHeader=req.headers.Authorization || req.headers.authorization
// if(authHeader && authHeader.startsWith("Bearer")){
//     token=authHeader.split(" ")[1]
//     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
//         if(err){

//             res.status(403).json({message:"User is  not authorized"})

//         }
//         req.userAvailable=decoded.userAvailable
//         next();
        

//     })
// if(!token){

//     res.status(403).json({message:"Token is expired or not valid !"})
  
// }
// }
// }


const app=express();
app.use(express.json())
connectDb();


app.use(cors());
const port=process.env.PORT;

// app.post(("/api/contact/sort"),async(req,res)=>{
//     const {flag}=req.body;
//     const contacts=await Contact.find()
//     if(flag==1){
//         let temp=[...contacts]
//         let ab=[]
//         temp.map((el,i)=>ab.push([el.name,i]))
//         ab.sort();
//         let final=[];
//         let temp2=[];
//         ab.map((el)=>temp2.push(el[1]))
//         temp.map((item,key)=>final.push(contacts[temp2[key]]))
//         res.status(200).json(final.map((el)=>({name:el.name,email:el.email})))

//     }else if(flag==2){
//         let temp=[...contacts]
//         let ab=[]
//         temp.map((el,i)=>ab.push([el.name,i]))
//         ab.sort();
//         ab.reverse();
//         let final=[];
//         let temp2=[];
//         ab.map((el)=>temp2.push(el[1]))
//         temp.map((item,key)=>final.push(contacts[temp2[key]]))
//         res.status(200).json(final.map((el)=>({name:el.name,email:el.email})))

//     }else{
//         res.status(200).json(contacts.map((el)=>({name:el.name,email:el.email})))
//     }

// })

// app.post(("/api/contact"),async(req,res)=>{
//     console.log(req.body)
//     const {name,email}=req.body;
//     if(!name || !email){
//         res.status(400)
//         throw new Error("All fields are mandatory !");
//     }
//     const contact=await Contact.create({
//         name,email
//     })
//     res.status(200).json(contact) 
  
// })


// app.post(("/api/register"),async(req,res)=>{
//     const {name,email,password}=req.body

// if(!name || !email || !password){
//     res.status(400);
//     throw new Error("All fields are mandantory !")
// }

// const userAvailable=await User.findOne({email})
// if(userAvailable){
//     res.status(400);
//     throw new Error("User already exists !")
// }

//     const hashedPassword=await bcrypt.hash(password,10)

//     const registered=await User.create({
//         name,email,password:hashedPassword
//     })
//     if(registered){
//         res.status(201).json({name,email})
//     }else{
//        res.status(400)
//        throw new Error("Not valid user")
//     }

// })

// app.get(("/api/info"),validateToken,async(req,res)=>{
//     console.log(req.userAvailable,"req")
// res.status(200).json(req.userAvailable)
// })

// app.post(("/api/login"),async(req,res)=>{
// const {email,password}=req.body
// if(!email || !password){
//     res.status(400)
//     throw new Error("All the fields are mandantory")
// }
// const userAvailable=await User.findOne({email})
// if(userAvailable && (bcrypt.compare(password,userAvailable.password))){
//     const accessToken=jwt.sign({
//         userAvailable:{
//             username:userAvailable.name,
//             email:userAvailable.email,
//             id:userAvailable.id
//         }
//     },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"4m"})
//     res.status(200).json({accessToken})
// }else{
// res.status(401);
// throw new Error("email or password is not valid !")
// }

// })

app.get(("/api/info"),async(req,res)=>{
    const anyname = await Sales.find()
    let temp=[...anyname]
        let ab=[]
        temp.map((el,i)=>ab.push([el.quantity,i]))
        
        ab.sort((a,b)=>b[0]-a[0]);
        let final=[];
        let temp2=[];
        ab.map((el)=>temp2.push(el[1]))
        temp.map((item,key)=>final.push(anyname[temp2[key]]))
        const z =final.slice(0,5)
        res.status(200).json(z.map((el)=>({name:el.name,quantity:el.quantity,amount:el.amount})))
    // // console.log(req.body)

    // const {name,quantity,amount}=req.body;

    // const contact=await Sales.create({
    //     name,quantity,amount
    // })
    // res.status(200).json({"name":anyname}) 
  
})

app.get(("/api/revenue"),async(req,res)=>{
    const anyname = await Sales.find()
    let temp=[...anyname]
        let ab=[]
        temp.map((el,i)=>ab.push([parseInt(el.amount)]))
    
        let final= 0;
        ab.forEach((elem)=>final = final + parseInt(elem))
        res.status(200).json({"total_revenue":final})
    // // console.log(req.body)

    // const {name,quantity,amount}=req.body;

    // const contact=await Sales.create({
    //     name,quantity,amount
    // })
    // res.status(200).json({"name":anyname}) 
  
})

app.listen(port,()=>console.log(`server running on port ${port}`))