const mongoose = require('mongoose')
const Schema= mongoose.Schema;
const {isEmail} = require('validator');
const md5 = require("md5");

const UserSchema= new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "please enter a username"],
      },
      email: {
        type: String,
        required: [true, "please enter an email"],
        unique: [true, "please enter another email"],
        validate:[isEmail,"please enter a valid email"]
      },
      password: {
        type: String,
        required: [true, "please enter a password"],
        minlength:[8,"minimum length of password is 8"]
      },
      subscription_id: {
        type: String,
        required: [true, "please enter a valid subsrciption_id"],
      },
}, {timestamps:true})
UserSchema.pre("save", async function (next) {
  this.password = md5(this.password);
  next();
});
const User = mongoose.model("user", UserSchema);

module.exports = User;