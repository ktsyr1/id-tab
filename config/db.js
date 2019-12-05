var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/idTab', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err);

    } else {
        console.log('db connected');

    }
});