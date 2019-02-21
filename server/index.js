let express = require("express");

const mongoose = require('mongoose');
mongoose.connect('mongodb://lcolten:hello123@ds145895.mlab.com:45895/checkpoint1', {useNewUrlParser: true});

const app = express();

app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});
