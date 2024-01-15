const express = require('express');
const app = express();

require('dotenv').config();

const allRoute = require('./routes')
app.use(express.json());
app.use(allRoute)




app.listen(process.env.ROOT, () => {
  console.log(`Server running on port 4040`);
});
