const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Controller');
router.post('/add',controller.adduser);
router.post("/login", controller.loginUser);
router.get("/user", controller.getUserByUsername);
router.post("/triggerPipeline", controller.triggerPipeline);
module.exports=router;