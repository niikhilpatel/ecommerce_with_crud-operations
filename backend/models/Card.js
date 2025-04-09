const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  price: { type: String },
  category: { type: String, enum: ['male', 'female', 'kids'], default: '' },  // 🔥 add this
  gear: { type: String, enum: ['none', 'running', 'training', 'football', 'basketball', 'studio'], default: '' } // 🔥 and this
});

module.exports = mongoose.model('Card', CardSchema);
