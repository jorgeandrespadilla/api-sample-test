// require mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ActionSchema = new Schema({
  actionName: {
    type: String,
    required: true
  },
  actionDate: {
    type: Date,
    required: true
  },
  includeInAnalytics: {
    type: Number,
    required: true,
    default: 0
  },
  id: {
    type: String,
    required: true
  },
  companyProperties: {
    type: Object,
    required: true,
    default: {}
  },
  userProperties: {
    type: Object,
    required: true,
    default: {}
  },
  meetingProperties: {
    type: Object,
    required: true,
    default: {}
  },
}, { timestamps: true, minimize: false });

module.exports = mongoose.model('Action', ActionSchema);
