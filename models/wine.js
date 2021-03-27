const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tastingNoteSchema = new Schema({
  content: String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {timestamps: true});

const wineSchema = new Schema({
  producer: {type: String, required: true},
  producerDetails: {type: String},
  location: {type: Schema.Types.ObjectId, ref: 'Location'},
  variety: {type: String},
  vintage: {type: Number},
  price: {type: Number},
  tastingNote: [tastingNoteSchema],
  usersListing: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {timestamps: true});


module.exports = mongoose.model('Wine', wineSchema);