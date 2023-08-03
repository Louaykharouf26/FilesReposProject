const express = require('express');
const router = express.Router();


const controller = require('../Controllers/Controller');
router.post('/add',controller.adduser);
router.post("/login", controller.loginUser);
router.get("/user", controller.getUserByUsername);
router.post("/triggerPipeline", controller.triggerPipeline);
router.post("/triggerPipelineContainer", controller.triggerPipelineContainer);

router.post("/uploadfile", controller.uploadfiles);
router.post("/deletefile", controller.deleteblobs);
router.get("/listblobs", controller.listblobs);


module.exports=router;