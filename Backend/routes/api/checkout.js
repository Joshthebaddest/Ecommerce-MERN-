const router = require('express').Router();
const checkoutController = require('../../controllers/api/checkoutController')

router.route('/:refrence')
    .get(checkoutController.verifyPayment)
router.route('/')
    .post(checkoutController.checkout)

module.exports = router;