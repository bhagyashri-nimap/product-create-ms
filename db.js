const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_msdatabase', {
    useNewUrlParser: true,

}, (err) => {
    if (!err) {
        console.log("MongoDB Connected...");

    } else {
        console.log("Error",err);
    }
});
module.exports = mongoose


