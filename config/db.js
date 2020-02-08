// var mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/idTab';

// mongoose.connect(uri, {

//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// }, (err) => {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log('db connected');

//     }
// });


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ktsyr1:idlibtp123@cluster0-6xfyu.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  });
client.connect(err => {
  const collection = client.db("id-Tab").collection("center");

console.log("fhyjghiuoj;piufydtshrhtdyfukgilho;jo;higufyjd");

  client.close();
});
