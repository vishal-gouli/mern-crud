let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");

let app = express();
// app.use(cors());
app.use(express.json({}))

mongoose.connect("mongodb://localhost:27017/mern-crud");
let backendschema = mongoose.Schema({
    name:String,
    lname:String,
    age:Number
},
{
    timeStamp:true
})

let usermodel = mongoose.model("user" , backendschema)

app.get("/",async(req,res)=>{
    let data = await usermodel.find({});
    res.send({success:true , message:"reading data from the backend" , data:data})
})

app.post("/create" , async(req,res)=>{
      let data = new usermodel(req.body);
      await data.save();
      res.send({seccess:true , message:"data is created successfullu"})
})

app.listen(7000,()=>{
    console.log("server is running at port something");
})