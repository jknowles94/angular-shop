const express = require("express");
const port = process.env.PORT || 4000;
let app = express();

app.listen(port);

console.log("API for shop on port:" + port);

//https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd