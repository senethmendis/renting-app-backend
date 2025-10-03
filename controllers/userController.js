const userServices = require("../services/userServices");

exports.getUserById = async (req, res) => {
   try {
      const user = await userServices.getUserById(req.params.id);
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.getAllUser = async (req, res) => {
   try {
      const users = await userServices.getAllUser();
      res.status(200).json({ message: "List of Users", users: users });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.updateUser = async (req, res) => {
   try {
      const updatedUser = await userServices.updateUser(req.params.id, req.body);
      res.status(200).json(updatedUser);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.createUser = async (req, res) => {
   try {
      const newUser = await userServices.createUsers(req.body);
      res.status(201).json(newUser);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.deleteUser = async (req, res) => {
   try {
      const deletedUser = await userServices.deleteUser(req.params.id);
      res.status(200).json({ id: req.params.id, deleted: deletedUser, message: "User Deleted Successfully" });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};