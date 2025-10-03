// models/User.js
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
   },
   note: {
      type: String,
   },
   paidAmount: {
      type: Number,
      default: 0,
   },
   balance: {
      type: Number,
      default: 0,
   },
   fullyPaid: {
      type: Boolean,
      default: false,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model("Items", ItemSchema);
