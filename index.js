import express, { urlencoded } from "express";
import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// database
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "testBackend",
  })
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(e);
  });

const dbSchema = new mongoose.Schema({
  name: String,
  number: Number,
});

const Bckend = mongoose.model("backend", dbSchema);

// apis

const app = express();
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// setting up view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const {token} = req.cookies;
  if(token){

    res.render("logout");
  }
  else{
    res.render("login")
  }
  
});

app.post("/login",(req,res)=>{
  res.cookie("andarAgia","approved",{
    httpOnly:true, expires : new Date(Date.now()+60*1000)
  });
  res.redirect("/")
})

app.get("/add", (req, res) => {
  Bckend.create({
    name: "Sara Kahan",
    number: 47,
  }).then(() => {
    res.send("ok done");
  });

});
app.get("/success", (req, res) => {
    res.render("success");
  });

// app.get("/users", (req, res) => {
//   res.json({
//     user,
//   });
// });

app.listen(5000, () => {
  console.log("Server is working somehow");
});
