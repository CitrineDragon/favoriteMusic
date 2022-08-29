const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  todoSong: {
    type: String,
    required: true,
  },
  todoArtist: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
