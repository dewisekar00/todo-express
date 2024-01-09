const express = require('express');
const app = express();




require('dotenv').config();

app.use(express.json());

const todoRoute = require('./routes/todo');

app.use(todoRoute);



const port = process.env.ROOT || 4040; // Menggunakan nilai dari ROOT jika ada, jika tidak, menggunakan default 4040

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
