const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/stbBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB successfuly!');
});
