import { useState } from 'react'
import upload from '../assets/upload.jpg'
import axios from 'axios'
import { useStateContext } from '../context/ContextProvider'

const ProductContent = ({ add, product, btnVal }) => {
    const [image, setImage] = useState(false)
    

    const addProduct = async(formData, product) => {
        try{
            const response = await axios.post('http://localhost:3500/upload', formData)
            if(response.status === 201){
                product.images = response.data.imageUrl;
                const res = await axios.post('http://localhost:3500/products',  product)
                if(res.status !== 201) throw new Error
                add()
            }
        }
        catch(err){
            console.log(err)
        }
    }

    const updateProduct = async(formData, productDetails) => {
        try{
            const response = await axios.post('http://localhost:3500/upload', formData)
            if(response.status === 201){
                productDetails.images = response.data.imageUrl;
                console.log(product._id)
                const res = await axios.put(`http://localhost:3500/products/${product._id}`,  productDetails)
                console.log(res)
                if(res.status !== 201) throw new Error
                add()
            }
        }
        catch(err){
            console.log(err)
        }
    }


    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const [productDetails, setProductDetails] = useState({
        productName: product? product.productName : '',
        price: product? product.price : '',
        quantityAvailable: product? product.quantityAvailable : '',
        description: product? product.description : '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = productDetails
        const formData = new FormData()
        formData.append('photos', image)
        if(btnVal === "Edit") {
            updateProduct(formData, product)
        } else{
            addProduct(formData, product)
        }

    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductDetails((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    }

    return(
        <>
            <div className="w-[800px] m-auto">
                <div className="flex justify-between m-10 mb-16">
                    <h1 className="text-2xl font-bold mb-4">Product</h1>
                    <button className="border rounded-md p-2 bg-blue-500 text-white hover:bg-blue-700" onClick={add}>Back</button>
                </div>
                <form action="" className="text-left " onSubmit={handleSubmit}>
                    <div className="input-container my-5">
                        <label htmlFor="ProductName">Product Name</label>
                        <input className="w-full mt-3 p-3 bg-slate-200 outline-none ring-0" type="text" name="productName" id="productName" placeholder="Enter Your Product Name" value={productDetails.productName} onChange={handleInputChange}/>
                    </div>
                    <div className="flex justify-between">
                        <div className="input-container my-5 pr-10 w-1/2">
                            <label htmlFor="ProductName">Price</label>
                            <input className="w-full mt-3 p-3 bg-slate-200 outline-none ring-0" type="text" name="price" id="price" placeholder="Enter Your Price" value={productDetails.price} onChange={handleInputChange}/>
                        </div>
                        <div className="input-container my-5 w-1/2">
                            <label htmlFor="ProductName">Quantity</label>
                            <input className="w-full mt-3 p-3 bg-slate-200 outline-none ring-0" type="text" name="quantityAvailable" id="quantity" placeholder="Enter Your Quantity" value={productDetails.quantity} onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className="input-container my-5">
                        <label htmlFor="ProductName">Description</label>
                        <textarea className="w-full mt-3 h-[180px] p-3 bg-slate-200 resize-none outline-none ring-0"  type="text" name="description" id="description" placeholder="write about your product" value={productDetails.description} onChange={handleInputChange}></textarea>
                    </div>
                    <div className="flex mb-10">
                        <div className="h-[100px] w-[100px] mr-10 relative ">
                            <img className="border border-solid absolute top-0 w-[100px] h-[100px]" src={image? URL.createObjectURL(image) : upload} alt="" />
                            <input onChange={handleImage} className="opacity-0 h-[100px] w-[100px] border border-solid absolute top-0" type="file" name="" id="" />
                        </div>
                    </div>
                    <button type="submit" className="p-3 bg-black text-white rounded-none">{btnVal} <i class="fa-solid fa-arrow-right"></i></button>
                </form>
            </div>
        </>
    )
}

export default ProductContent;