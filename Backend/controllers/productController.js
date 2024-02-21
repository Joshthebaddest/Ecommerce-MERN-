const fs = require('fs')
const path = require('path')

const products = require('../model/Product');

const getProduct = async(req, res) => {
    const product = await products.find({}).exec();

    if(product.length <= 0) return res.sendStatus(204);

    res.status(200).json({ product });

}

const getOneProduct = async (req, res) => {
    const _id = req.params.id
    const product = await products.findOne({ _id }).exec();
    if(!product) return res.sendStatus(204);

    res.status(200).json({ product });

}

const creatProduct = async (req, res) => {
    console.log(req.body)
    const { productName } = req.body;
    const foundOne = await products.findOne({ productName }).exec();
    if(foundOne) return res.status(409).json({ 'message': 'product with name exist in the database' });
    try{
        await products.create(req.body);
        res.sendStatus(201)
    }
    catch(err){
        res.status(500).json({ 'message': err.message })
    }
}

const updateProduct = async(req, res) => {
    const _id = req.params.id
    req.body.images = [req.body.images]
    console.log(req.body.images)
    if(!_id) return res.status.json({ 'message': 'invalid parameter' });
    console.log(_id)
    const product = await products.findOne({ _id }).exec();
    console.log(product)

    if(!product) return res.status(404).json({ 'message': 'no product found' });
    try {
        const update = await products.findByIdAndUpdate(_id, req.body, {new: true})
        console.log(update)
        
        res.status(201).json({ 'message': 'product updated' })

    }catch(err){
        res.status(500).json({ 'message': err.message})
    }

}

const deleteProduct = async (req, res) => {
    const _id = req.params.id
    if(!_id) return res.status(404).json({ 'message': 'invalid parameter' });
    const product = await products.findOne({ _id }).exec();
    if(!product) return res.status(404).json({ 'message': 'no product found' });

    try{
        product.images.map((img)=>{
            const filePath = path.join('./public/images/', img.replace('http://localhost:3500/image/', ''));
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                    return;
                }
                console.log('File deleted successfully');
            });
        })
        await products.deleteOne({ _id });
        res.sendStatus(204)
    }
    catch(err){
        res.status(500).json({ 'message': err.message})
    }
}



module.exports = { getProduct, getOneProduct, creatProduct, updateProduct, deleteProduct }