const renterServeices = require("../services/renterService");

exports.getRenterById = async (req, res) => {
   try {
      const item = await renterServeices.getRenterById(req.params.id);
      res.status(200).json(item);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.searchRenters = async (req, res) => {
   try {
      const item = await renterServeices.searchRenters(req.query.searchKeyWord);
      res.status(200).json(item);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.getAllRenters = async (req, res) => {
   try {
      const items = await renterServeices.getAllRenters();
      res.status(200).json({ message: "List of Items", items: items });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.updateRenter = async (req, res) => {
   try {
      const updatedItem = await renterServeices.updateRenter(req.params.id, req.body);
      res.status(200).json(updatedItem);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.createNewRent = async (req, res) => {
   try {
      const newItem = await renterServeices.createNewRent(req.body);
      res.status(201).json(newItem);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.deleteRenter = async (req, res) => {
   try {
      const deletedItem = await renterServeices.deleteRenter(req.params.id);
      res
         .status(200)
         .json({ message: "Item deleted successfully", item: deletedItem });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};
