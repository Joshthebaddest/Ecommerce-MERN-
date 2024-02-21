// const roles = require('../../config/roles_list');
// const verifyRoles = require('../../middleware/verifyRoles');
const router = require('express').Router();
const cartController = require('../../controllers/cartController')

router.route('/:id')
    .put(cartController.updateCart)
    .delete(cartController.deleteOneCart)
router.route('/')
    .get(cartController.getCart)
    .post(cartController.createCart)
    .delete(cartController.deleteCart)

module.exports = router;