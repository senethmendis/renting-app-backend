const RenderModel = require("../models/renter");

exports.getRenterById = async (id) => {
   return await RenderModel.findById(id);
}

exports.updateRenter = async (id, itemData) => {
   return await RenderModel.findByIdAndUpdate(id, itemData);
}

exports.getAllRenters = async () => {
   return await RenderModel.find();
}

exports.createNewRent = async (itemData) => {
   const newItem = new RenderModel(itemData);
   return await newItem.save();
}

exports.deleteRenter = async (id) => {
   return await RenderModel.findByIdAndDelete(id);
}

exports.searchRenters = async (searchKeyWord) => {
   return await RenderModel.find({
      name: { $regex: searchKeyWord, $options: 'i' }
   });
};