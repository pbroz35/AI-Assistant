const express = require('express');
const app = express()
const path = require('path');
const PORT = process.env.PORT || 3500;
const cors = require('cors');

//built-in middleware for json
app.use(express.json());

//cors - cross orgin resource sharing
 app.use(cors());

 app.use("/getChat", require("./routes/get-chat"));

app.use("/", (req, res)=>{
  res.send("Welcome to the main index page..");
})

 app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));