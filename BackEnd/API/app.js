const express = require('express');
require("./config.js")
const app = express();
const cors = require("cors");
app.use(express.json());

const router = require('./Routes/routes.js')
require("dotenv").config();
app.use(
    cors({
      origin: ['http://localhost:5173'],
      credentials: true,            //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    })
  );
app.use(router);

app.listen(process.env.PORT,()=>{})