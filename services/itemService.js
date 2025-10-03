const ItemModel = require("../models/item");

exports.getItemById = async (id) => {
   return await ItemModel.findById(id);
}

exports.updateItem = async (id, itemData) => {
   return await ItemModel.findByIdAndUpdate(id, itemData);
}

exports.getAllItems = async () => {
   return await ItemModel.find();
}

exports.createItem = async (itemData) => {
   const newItem = new ItemModel(itemData);
   return await newItem.save();
}

exports.deleteItem = async (id) => {
   return await ItemModel.findByIdAndDelete(id);
}

exports.searchItems = async (searchKeyWord) => {
   return await ItemModel.find({
      name: { $regex: searchKeyWord, $options: 'i' }
   });
};