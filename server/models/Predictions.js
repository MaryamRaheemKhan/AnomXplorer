
const mongoose = require('mongoose');

const predictionsSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  PT_ADMISSION: { type: Number, required: true },
  PT_DISCHARGE: { type: Number, required: true },
  PT_CHARGESAMOUNT: { type: Number, required: true },
  PT_ADVANCEAMOUNT: { type: Number, required: true },
  PT_BILLDATE: { type: Number, required: true },
  Anomaly: { type: String, required: true }
});

const Predictions = mongoose.model('predictions', predictionsSchema);

module.exports = Predictions;
