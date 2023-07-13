const express = require("express");
const User = require('../Models/users')
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const fs = require("fs");
const request = require("request");
const { exec } = require('child_process');
const { Octokit } = require('@octokit/rest');
module.exports.adduser = async(req,res) =>{
    const {username, email, password,subscription_id} = req.body
    User.findOne({ email })
    .then((response) => {
      if (response == null) {
        User.create({username,email,password,subscription_id,})
          .then((response) => {
            res.json("User added successfully to database");
            res.status(200);
          })
          .catch((err) => console.log(err));
      } else {
        res.status(400);
        res.json("User is already in the database");
      }
    })
    .catch((err) => console.log(err));
};

const maxAge = 700 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};
module.exports.loginUser=async (req,res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      var auth;
      if (md5(password) === user.password) auth = true;
      else {
        res.send("Wrong password please retype it again");
        auth = false;
      }
      if (auth) {
        const token = createToken(user._id);
        res.cookie("jwt", token, { maxAge: maxAge * 1000, httpOnly: true });
        console.log(JSON.stringify({ id: user._id.valueOf() }));
        res
          .status(200)
          .send(JSON.stringify({ id: user._id.valueOf(), name: user.firstname ,email: user.email, subscription_id: user.subscription_id}));
      }
    } else {
      res.status(400);
      res.send("Wrong username please retype it again");
    }

}
module.exports.getUserByUsername = async (req, res) => {
    const username = req.body.username;
    const user = await User.findOne({ username });
    if (user) {
      //res.send(user)
      res.send(JSON.stringify(user));
    } else {
      res.send("User not found, please recheck the username");
    }
  };
  module.exports.triggerPipeline = async (req, res) => {
    const jenkins_url = `http://localhost:5000/job/FilesRepoPipeline/build`;
    const params = req.body;
    console.log(params);
    var name =
      __dirname + "\\..\\..\\Terraform\\terraform.tfvars.json";
    var m = JSON.parse(fs.readFileSync(name).toString());
    Object.entries(params).map((p) => {
      m[p[0]] = p[1];
    });
    fs.writeFileSync(name, JSON.stringify(m));
    //E:\PFA\backpfa\PFA\PFA\terraform-template\terraform.tfvars.json
    //C:\Users\louay\Desktop\GITProject\BackEnd\Terraform
   // "../../Terraform"
    exec("docker cp ../../Terraform/terraform.tfvars.json jenkins:/var/jenkins_home/workspace/FilesRepoPipeline/BackEnd/Terraform", (error, stdout, stderr) => {
      //console.log(stdout,stderr,error)
      console.log("success");
   });
     
    var clientServerOptions = {
      uri: jenkins_url,
      body: "",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("louaykharouf:11e96d811ffd4131883788af93ff937d5d"),
      },
    };
    request(clientServerOptions, function (error, response) {
      console.log(error, response.body);
      return;
    });
    res.send(m);

  };