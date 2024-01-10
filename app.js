const express = require('express');
const app = express();




require('dotenv').config();

app.use(express.json());

const todoRoute = require('./routes/todo');

app.use(todoRoute);




app.listen(process.env.ROOT , () => {
    console.log(`Server running on port 4040`);
});
