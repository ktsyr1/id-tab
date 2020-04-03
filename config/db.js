var mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/idTab';

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err);
    else console.log('db connected');
}); 
