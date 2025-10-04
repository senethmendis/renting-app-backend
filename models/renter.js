const mongoose = require('mongoose');

const RenterSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   contact: {
      type: String,
      required: true,
   },
   address: {
      type: String,
   },
   items: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
   }],
   date: {
      type: Date,
      default: Date.now,
   },
   totalAmount: {
      type: Number,
      default: 0,
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
   createdAt: {
      type: Date,
      default: Date.now,
   },
   updatedAt: {
      type: Date,
      default: Date.now,
   },
});

module.exports = mongoose.model('Renter', RenterSchema);