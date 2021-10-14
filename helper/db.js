const mongoose = require('mongoose');
const connectionText = "mongodb+srv://novohead:bm92b2hlYWQ@webarnov.ga7m3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
module.exports = () => {
    mongoose.connect(connectionText, { useNewUrlParser: true, useCreateIndex: true });

    mongoose.connection.on('open', () => {
        console.log('MongDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongDB: Error ' + err);
    });

    mongoose.Promise = global.Promise;

} 