
var { productData } = require('../mongooseModel/Product.js');
exports.save = async function (data) {
    let saveProduct
       let newProductObj = {
        productSku: data.productSku,
        productName: data.productName,
          
       }
       let productObj = new productData(newProductObj)
       saveProduct = await productObj.save()
       console.log(saveProduct)
       if (saveProduct && !saveProduct._id) {
           return {
               data: "Something Went Wrong While Saving Product",
               value: false
           }
       }
       return {
           data: saveProduct,
           value: true
       }
}