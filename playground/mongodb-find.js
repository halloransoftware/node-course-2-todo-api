// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

db.collection('Users').find({name: 'John'}).toArray().then((docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
});

// db.collection('Todos').find({}).count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b3ac42a986bf0ab232609e8')
  // }).toArray().then((docs) => {
  // // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //   console.log('Unable to find todos', err);
  // });

  // client.close();
});
