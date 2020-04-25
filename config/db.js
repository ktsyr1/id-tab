var mongoose = require('mongoose');
const uri = process.env.DB_URL ||'mongodb://localhost:27017/idTab';

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err);
    else console.log('db connected');
}); 
