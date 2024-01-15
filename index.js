const express = require('express');
const app = express();

require('dotenv').config();

const allRoute = require('./routes')
app.use(express.json());
app.use(allRoute)




const port = parseInt(process.env.ROOT, 10) || 4040;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
