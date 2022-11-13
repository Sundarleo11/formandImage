const express =require('express');

const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.get("/mypost",(req,res)=>{
  
    console.log(req.body);
    res.status(200).send(req.body);
});
app.listen(4000,()=>{
    console.log("All server are up and runing 4000");
})