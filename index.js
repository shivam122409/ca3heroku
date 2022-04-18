const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");

const viewPath = path.join(__dirname,"template");
app.set("views", viewPath);

const partialsPath = path.join(__dirname,"template/partials");
hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, "template/asset")));

app.get('/', (_request, response)=>{
    response.render("index",{
        name:'shivam aditya',
        
    });
}) 

app.listen(port, ()=>{
    console.log("server is running on port"+port);
})