const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://vimal2540vk:exvsyLmtz06A5zRz@cluster0.kjiau.mongodb.net/'
  )
    .then(client => {
      console.log('MongoDB Connected');
      callback(client);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
