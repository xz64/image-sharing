const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageLinkSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  caption: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
});

const ImageLink = mongoose.model('ImageLink', imageLinkSchema);

module.exports = ImageLink;
