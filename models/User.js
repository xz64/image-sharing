const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  twitterId: String,
  username: String,
});

userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = User;
