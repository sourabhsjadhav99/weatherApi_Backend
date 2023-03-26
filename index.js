let dotenv=require('dotenv').config()
const express = require("express");
const app = express();
const port =process.env.PORT || 5000
const cityRoutes= require("./src/routes/crud");
require("./src/connectionAndSchema/config");
let cors = require("cors")

 
app.use(cors())
app.use("/",cityRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;