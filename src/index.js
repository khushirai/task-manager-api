const express = require("express");
require("./db/mongoose");
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app = express();
const port = process.env.PORT;

// automatically parse incoming json to an object
app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

// without middleware:new request-run route handler
// with middleware:new request-do sh(function)->run route handler

app.listen(port, () => {
    console.log("Server is up on port " + port);
});

