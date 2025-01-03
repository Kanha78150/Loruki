const express = require('express');
const app = express();
const path = require('path')

require("dotenv").config();
const db = require("./config/mongoose-setup");

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/indexRouter');
const aboutRouter = require('./routes/aboutRouter');
app.use('/', indexRouter);
app.use('/about', aboutRouter);

db();


app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
