const express = require('express');

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");

app.post("/mypost", (req, res) => {  
    console.log(req.body);
    res.status(200).send(req.body); 

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