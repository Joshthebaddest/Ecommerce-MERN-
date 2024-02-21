const Cart = require('../model/Cart')
const Product = require('../model/Product')
const Users = require('../model/User')

const createCart = async (req, res) => {
    const sessionId = req.session.cartId
    const productId = req.body.productId;

    const product = await Product.findOne({ _id: productId }).exec();
    
    if(!product) return res.status(204).json({ 'Message': 'No Product Found' })
    const { _id, productName, price, images } = product

    try{
        if(!sessionId){
            const saveToCart = await Cart.create({ items: { _id, productName, price, quantity: 1, images } })
            req.session.cartId = saveToCart._id;
            res.sendStatus(201)
        }
        else{
            const findCart = await Cart.findOne({ _id: sessionId, 'items._id': productId }).exec()
            if(findCart) return res.sendStatus(409)
            const cart = await Cart.findOneAndUpdate({ _id: sessionId }, { $push: { items: { _id, productName, price, quantity: 1, images } }}, {new: true})
            // const carting = await Cart.findOne({ _id }).populate('items').exec()
            res.sendStatus(201)
        }
    }
    catch(err){
        res.status(500).json({'message': err.message})
    }
}

const getCart = async(req, res) => {
    const sessionId = req.session.cartId
    const user = await Users.findOne({ refreshToken : req.cookies.jwt }).exec()

    if(!sessionId) return res.sendStatus(400);

    try{
        const usersCart = await Cart.findOne({ _id: sessionId }).populate('items').exec()
        if(!usersCart) return res.status(204).json({ 'message': 'No Cart found' })
        if(user) await Cart.findOneAndUpdate({ _id: sessionId }, { userId: user._id }, {new: true})
        const { items } = usersCart;
        res.status(200).json({ usersCart: items })
    }
    catch(err){
        res.status(500).json({'message': err.message})
    }
    
}

const deleteCart = async(req, res) => {
    const sessionId = req.session.cartId;
    if(!sessionId) return res.status(400).json({ 'message': 'No Cart Found.' });

    const cart = await Cart.findOne({ _id: sessionId }).exec();
    if (!cart) {
        req.session = null
        return res.status(204).json({ 'message': 'No Cart Found.' })
    };

    const result = await Cart.deleteOne({ _id: sessionId}); 
    // { _id: req.body.id }
    req.session = null
    res.sendStatus(200);
}

const deleteOneCart = async(req, res) => {
    if(!req.session?.cartId) return res.status(400).json({ 'message': 'No Cart Found.' });
    const _id = req.params.id;

    try{
        const cart = await Cart.findOne({ _id:  req.session.cartId}).exec()
        if(!cart) return res.status(204).json({ 'message': 'no cart found' })
    
        const updatedCart = await Cart.findOneAndUpdate(
            { _id: req.session.cartId },
            { $pull: { items: {_id} } },
            { new: true } 
        )
        console.log(updatedCart.items)
        if(updatedCart.items.length >= 1) return res.sendStatus(200)

        const result = await Cart.deleteOne({ _id: req.session.cartId}); //{ _id: req.body.id }
        req.session = null
        
        res.sendStatus(200);
    }
    catch(err){
        res.status(500).json({'message': err.message})
    }
}

const updateCart = async(req, res) => {
    if(!req.session?.cartId) return res.status(400).json({ 'message': 'No Cart Found.' });
    const productId =  req.params.id;
    const newQuantity = req.body.quantity;
    try{
        const cart = await Cart.findOne({ _id: req.session.cartId }).exec()
        if(!cart) return res.status(204).json({ 'message': 'no cart found' })
        const updatedCart = await Cart.findOneAndUpdate(
            { _id: req.session.cartId, 'items._id': productId },
            { $set: { 'items.$.quantity': newQuantity } },
            { new: true } 
        )
        res.sendStatus(201)
    }
    catch(err){
        res.status(500).json({'message': err.message})
    }
}


module.exports = {createCart, getCart, deleteCart, deleteOneCart, updateCart} 