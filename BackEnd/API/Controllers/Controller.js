const express = require("express");
const User = require('../Models/users')
const jwt = require("jsonwebtoken");
const multer = require('multer');
const md5 = require("md5");
const path = require('path');
const formData = require('form-data');
const fs = require("fs");
const request = require("request");
const { exec } = require('child_process');
const amqp = require('amqplib');


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
function btoa(str) {
  return Buffer.from(str).toString('base64');
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
    const jenkins_url = `http://172.17.0.2:8080/job/FilesRepoPipeline/build`;
    //const jenkins_url = `http://localhost:5000/job/FilesRepoPipeline/build`;
    const params = req.body;
    console.log(params);
   
    var name = path.join(__dirname, '../Terraform/terraform.tfvars.json');
    //__dirname + "\\..\\..\\Terraform\\terraform.tfvars.json"
    var m = JSON.parse(fs.readFileSync(name).toString());
    Object.entries(params).map((p) => {
      m[p[0]] = p[1];
    });
    fs.writeFileSync(name, JSON.stringify(m));
    //E:\PFA\backpfa\PFA\PFA\terraform-template\terraform.tfvars.json
    //C:\Users\louay\Desktop\GITProject\BackEnd\Terraform
   // "../../Terraform"
   //"../../Terraform/terraform.tfvars.json"
  
    /*exec("docker cp ./Terraform/terraform.tfvars.json jenkins:/var/jenkins_home/workspace/FilesRepoPipeline/BackEnd/Terraform", (error, stdout, stderr) => {
      console.log(stdout,stderr,error)
      console.log("success");
   });*/
     

    var clientServerOptions = {
      uri: jenkins_url,
      body: "",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("louaykharouf:111eb5418edf0706b5c52c453601ae4103"),
      },
    };
    request(clientServerOptions, function (error, response) {
      console.log(error, response.body);
      return;
    });
    res.send(m);

  };
  
  module.exports.triggerPipelineContainer = async (req, res) => {
   const jenkins_url = `http://172.17.0.2:8080/job/CreateRepo/build`;
   //const jenkins_url = `http://localhost:5000/job/CreateRepo/build`;
    const params = req.body;
    console.log(params);
    var name =path.join(__dirname, '../Terraform/Container/terraform.tfvars.json');
   // __dirname + "\\..\\..\\Terraform\\Container\\terraform.tfvars.json"
    var m = JSON.parse(fs.readFileSync(name).toString());
    Object.entries(params).map((p) => {
      m[p[0]] = p[1];
    });
    fs.writeFileSync(name, JSON.stringify(m));
    var name1 =path.join(__dirname, '../Terraform/terraform.tfvars.json')
    //__dirname + "\\..\\..\\Terraform\\terraform.tfvars.json";
  // __dirname + "../../Terraform\\terraform.tfvars.json";
  var a = JSON.parse(fs.readFileSync(name1).toString());
  Object.entries(params).map((l) => {
    a[l[0]] = l[1];
  });
  fs.writeFileSync(name1, JSON.stringify(a));
    //E:\PFA\backpfa\PFA\PFA\terraform-template\terraform.tfvars.json
    //C:\Users\louay\Desktop\GITProject\BackEnd\Terraform
   
   // "../../Terraform"
   //"../../Terraform/terraform.tfvars.json"
  /*  exec("docker cp ./Terraform/Container/terraform.tfvars.json jenkins:/var/jenkins_home/workspace/CreateRepo/BackEnd/Terraform/Container", (error, stdout, stderr) => {
      console.log(stdout,stderr,error)
      console.log("success");
   });*/
     
    var clientServerOptions = {
      uri: jenkins_url,
      body: "",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("louaykharouf:111eb5418edf0706b5c52c453601ae4103"),
      },
    };
    request(clientServerOptions, function (error, response) {
      console.log(error, response.body);
      return;
    });
    res.send(m);

  };
 /*
  module.exports.uploadFile = (req, res) => {
    console.log(req.body.filePath);
   // const fileName = path.basename(req.body);
  /*if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: 'No files were uploaded.' });
  }
 // console.log(fileName)

  const file = req.body.filePath;
  // Process the uploaded file here
  console.log(file);

  // Move the file to the desired folder
  const uploadPath = `${__dirname}/uploads/${file}`;
  file.mv(uploadPath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'File upload failed.' });
    }
    res.json({ message: 'File uploaded successfully.' });
  });
  };*/
  module.exports.uploadfiles = async (req, res) => {
    
    const params = req.body;
    console.log(params);
    var name = path.join(__dirname, '../Terraform/terraform.tfvars.json');
      //__dirname + "\\..\\..\\Terraform\\terraform.tfvars.json";
      //__dirname + "../../Terraform/terraform.tfvars.json";
    var m = JSON.parse(fs.readFileSync(name).toString());
    Object.entries(params).map((p) => {
      m[p[0]] = p[1];
    });
    fs.writeFileSync(name, JSON.stringify(m));
    //E:\PFA\backpfa\PFA\PFA\terraform-template\terraform.tfvars.json
    //C:\Users\louay\Desktop\GITProject\BackEnd\Terraform
   
   // "../../Terraform"
   //"../../Terraform/terraform.tfvars.json"
   const scriptName = 'script2.ps1';
   const scriptPath = path.join(__dirname, scriptName);
    exec(`pwsh -ExecutionPolicy Bypass -File "${scriptPath}"`, (error, stdout, stderr) => {
      console.log(stdout,stderr,error)
      console.log("success");
   });
     
    /*var clientServerOptions = {
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
    });*/
    res.send(m);

  };
 
module.exports.listblobs = async (req, res) => {
  // Your existing code to execute the PowerShell script
  const scriptName = 'listblobs.ps1';
  const scriptPath = path.join(__dirname, scriptName);
  exec(`pwsh -ExecutionPolicy Bypass -File "${scriptPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing PowerShell script:', error);
      return res.status(500).json({ error: 'Error executing PowerShell script' });
    }

    const output = stdout.trim().split('\n'); // Assuming the output is a list of blob names
    res.json(output);
  });
};
module.exports.deleteblobs = async (req, res) => {
  const params = req.body;
  const deletedBlobs = [];

  try {
    console.log(params);
    const name = path.resolve(__dirname, '..', '..', 'API', 'terraform', 'terraform.tfvars.json');


    const m = JSON.parse(fs.readFileSync(name).toString());
    Object.entries(params).map((p) => {
      m[p[0]] = p[1];
    });
    fs.writeFileSync(name, JSON.stringify(m));
    console.log(params);

    const scriptName = 'deleteblobs.ps1';
    const scriptPath = path.join(__dirname, scriptName);
    exec(`pwsh -ExecutionPolicy Bypass -File "${scriptPath}"`, async (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing PowerShell script:', error);
        return res.status(500).json({ error: 'Error executing PowerShell script' });
      }

      const output = stdout.trim().split('\n'); // Assuming the output is a list of blob names

      // Prepare the deletedBlobs array with blob names and notification texts
      /*output.forEach((blobName) => {
        const notificationText = `Blob '${blobName.trim()}' deleted successfully.`;
        deletedBlobs.push({ blobName: blobName.trim(), notification: notificationText });
      });
*/
output.forEach((blobName) => {
  const isDeleted = true; // Modify this based on the actual status (e.g., true if deleted, false if not)
  deletedBlobs.push({ blobName: blobName.trim(), status: isDeleted });
});

      // Send the list of deleted blobs and their corresponding notifications in the response JSON
      res.json({ deletedBlobs });

      // Send a message to RabbitMQ
      try {
        const connection = await amqp.connect('amqp://172.17.0.3:15672/');
        const channel = await connection.createChannel();
        const queue = 'file_deletion_notifications';

        deletedBlobs.forEach(({ blobName, notification }) => {
          const message = JSON.stringify({ params, notification });
          channel.sendToQueue(queue, Buffer.from(message));
          console.log(`Sent deletion notification for blob: ${blobName}`);
        });

        await channel.close();
        await connection.close();
      } catch (error) {
        console.error('Error sending deletion notification:', error);
      }
    });
  } catch (error) {
    console.error('Error processing blob deletion:', error);
    res.status(500).json({ error: 'Error processing blob deletion' });
  }
};