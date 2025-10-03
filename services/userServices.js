const userModel = require("../models/users");

exports.getUserById = async (id) => {
   return await userModel.findById(id);
};

exports.updateUser = async (id, admin) => {
   return await userModel.findByIdAndUpdate(id, admin);
};

exports.getAllUser = async () => {
   return await userModel.find();
};

exports.createUsers = async (userData) => {
   const newUser = new userModel(userData);
   return await newUser.save();
};
exports.deleteUser = async (id) => {
   return await userModel.findByIdAndDelete(id);
};