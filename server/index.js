let express = require("express");
let bodyParser = require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://lcolten:hello123@ds145895.mlab.com:45895/checkpoint1', {useNewUrlParser: true});

const app = express();
app.use(bodyParser.json());
app.use(require( "./routes/DateTimeRoutes"));
app.use(require("./routes/NewCommentsRoutes"));
app.use(require("./routes/NewOrdersRoutes"));
app.use(require("./routes/NewTasksRoutes"));
app.use(require("./routes/TicketsRoutes"));
app.use(require("./routes/MessagesRoutes"));
app.use(require("./routes/OrdersRoutes"));
app.use(require("./routes/TasksRoutes"));
app.use(require("./routes/FoxRoutes"));






app.listen(3001, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages", err);
});
