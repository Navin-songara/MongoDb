//server.js file is used to connect route, model, and database
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 9669;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const bookRoute = require('./book.route.js');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/book', bookRoute);

mongoose.connect(config.URL).then(() => {
    console.log("Database is connnect ", config.URL)
}, err => { console.log("Cannot connect to the database ", err) });

app.listen(PORT, () => {
    console.log('Server is running on port :', PORT);
});