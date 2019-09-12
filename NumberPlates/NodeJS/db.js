const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DanskeCrudApp', { useNewUrlParser: true }, (err) => {
    if(!err)
        console.log('Prisijungimas prie MongoDB pavyko');
    else
        console.log('Prisijungimo klaida: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;