const itemServeices = require("../services/itemService");

exports.getItemById = async (req, res) => {
   try {
      const item = await itemServeices.getItemById(req.params.id);
      res.status(200).json(item);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.searchItems = async (req, res) => {
   try {
      const item = await itemServeices.searchItems(req.query.searchKeyWord);
      res.status(200).json(item);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.getAllItems = async (req, res) => {
   try {
      const items = await itemServeices.getAllItems();
      res.status(200).json({ message: "List of Items", items: items });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.updateItem = async (req, res) => {
   try {
      const updatedItem = await itemServeices.updateItem(req.params.id, req.body);
      res.status(200).json(updatedItem);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.createItem = async (req, res) => {
   try {
      const newItem = await itemServeices.createItem(req.body);
      res.status(201).json(newItem);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

exports.deleteItem = async (req, res) => {
   try {
      const deletedItem = await itemServeices.deleteItem(req.params.id);
      res
         .status(200)
         .json({ message: "Item deleted successfully", item: deletedItem });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};
