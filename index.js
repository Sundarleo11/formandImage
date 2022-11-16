const express = require('express');
const files=require('express-fileupload');
const cloudinary=require('cloudinary').v2;
const app = express();
cloudinary.config({
    cloud_name:"dmyqjit0z",
    api_key:"193976785214388",
    api_secret:"hFbAO8UjRCj58GDoOxx-jSHjvok"
});
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(files({
    useTempFiles: true,
    tempFileDir:"/tmp",
}));

app.set("view engine", "ejs");

app.post("/mypost", async (req, res) => {  
    console.log(req.body);
    console.log(req.files);
 const file=req.files.savefile;
 
 result=await cloudinary.uploader.upload(file.tempFilePath,{
  folder:"user"
 })
 console.log(result);
    details={
        firstname:req.body.Firstname,
        lastname:req.body.LastName,
        result
    }
    //res.status(200).send(req.body); 
    res.status(200).send(details);

});
app.get("/getpost", (req, res) => {


    //console.log(req.query);
    console.log(req.body);
    //res.status(200).send(req.body); //postman will work
    res.status(200).send(req.query); //application will work


});


app.get("/getform", (req, res) => {
    res.render("getform");
})
app.get("/postform", (req, res) => {
    res.render("postform");
});


app.listen(4000, () => {
    console.log("All server are up and runing 4000");
})