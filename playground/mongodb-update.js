// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

//5b396fd19add7d03bbca4429

//findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b396fd19add7d03bbca4429')
  }, {
    $set: {
      name: 'Jenny'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
   console.log(result);
 });

  // client.close();
});
