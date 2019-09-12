const mongoose = require('mongoose');

var Number = mongoose.model('Number', {
    number: {type: String},
    user: {type: String}
});

module.exports = { Number };