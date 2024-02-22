const roles = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const verifyJwt = require('../../middleware/verifyJWT');
const router = require('express').Router();
const productController = require('../../controllers/productController')

router.route('/:id')
    .get(productController.getOneProduct)
    .put(
        // verifyJwt, verifyRoles(roles.Admin), 
         productController.updateProduct)
    .delete(
        // verifyJwt, verifyRoles(roles.Admin), 
        productController.deleteProduct)
router.route('/')
    .get(productController.getProduct)
    .post(
        // verifyJwt, verifyRoles(roles.Admin, roles.Editor), 
        productController.creatProduct)

module.exports = router;