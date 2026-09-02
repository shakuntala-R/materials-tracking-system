const mongoose = require('mongoose');

const outgoingMaterialSchema = new mongoose.Schema(
  {
    materialName: {
      type: String,
      required: true
    },
    dateIssued: {
      type: Date,
      required: true,
      default: Date.now
    },
    issueNumber: {
      type: String,
      required: true,
      unique: true
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
    issuedTo: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    purpose: {
      type: String,
      required: false
    },
    remarks: {
      type: String,
      required: false
    },
    status: {
      type: String,
      enum: ['issued', 'received', 'returned'],
      default: 'issued'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('OutgoingMaterial', outgoingMaterialSchema);