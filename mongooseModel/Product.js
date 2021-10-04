const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var productSchema = Schema({
    productSku: {
        type: String
    },
    productName: {
        type: String
    }
});
var productData = mongoose.model('Product', productSchema);
module.exports = {
    productData
}