const mongoose = require('mongoose');

const incomingMaterialSchema = new mongoose.Schema(
  {
    materialName: {
      type: String,
      required: true
    },
    dateReceived: {
      type: Date,
      required: true,
      default: Date.now
    },
    invoiceNumber: {
      type: String,
      required: true,
      unique: true
    },
    supplier: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 0
    },
    unit: {
      type: String,
      enum: ['kg', 'liter', 'piece', 'box', 'bag', 'other'],
      default: 'piece'
    },
    department: {
      type: String,
      required: true
    },
    cost: {
      type: Number,
      required: false
    },
    remarks: {
      type: String,
      required: false
    },
    status: {
      type: String,
      enum: ['received', 'verified', 'stored'],
      default: 'received'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('IncomingMaterial', incomingMaterialSchema);