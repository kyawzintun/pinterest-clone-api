const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const dbURI = "mongodb://kyawzintun:test@ds247077.mlab.com:47077/kzt-pinterest-clone";

function connect() {
  mongoose.connect(dbURI, { useMongoClient: true })
  .catch(() => { });
}

module.exports = () => {
  const db = mongoose.connection;

  db.on('connecting', () => {
    console.log('Connecting to MongoDB...');
  });

  db.on('error', (err) => {
    console.log(`MongoDB connection error: ${err}`);
    mongoose.disconnect();
  });

  db.on('connected', () => {
    console.log('Connected to MongoDB!');
  });

  db.once('open', () => {
    console.log('MongoDB connection opened!');
  });

  db.on('reconnected', () => {
    console.log('MongoDB reconnected!');
  });

  db.on('disconnected', () => {
    console.log(`MongoDB disconnected! Reconnecting in 1000s...`);
  });

  connect();
};
