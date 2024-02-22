import { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import DataTable from "../components/DataTable";
import { ProductContent } from "../components";
import axios from "axios";


const Product = () => {
    const { product, setProduct, updatedProduct, setUpdatedProduct, setUrl } = useStateContext()
    const [ oneProduct, setOneProduct ] = useState(null)
    const [ btnVal, setBtnVal ] = useState(null)


    useEffect(()=>{
        if(updatedProduct){
            getProduct()
        }
    }, [updatedProduct])

    const getProduct = async() => {
        console.log('wole')
        try{
            const response = await axios.get('http://localhost:3500/products')
            if(response.status === 200) setProduct(response.data.product)
            else setProduct(null)
            setUpdatedProduct(true)
        }catch(err){
            console.log(err)
        }
    }

    const deleteProduct = async(id) => {
        try{
            const res = await axios.delete(`http://localhost:3500/products/${id}`)
            getProduct()
        }
        catch(err){
            console.log(err)
        }
    }

    const add = (val)=>{
        console.log(updatedProduct)
        setOneProduct(null)
        setBtnVal(val)
        setUpdatedProduct(!updatedProduct)
    }

    const edit = (id, val)=>{
        console.log('wole')
        const foundProduct = product.find(item => item._id === id);
        setOneProduct(foundProduct)
        setBtnVal(val)
        setUpdatedProduct(!updatedProduct)
        
    }
  

    return(
        <>
            {!updatedProduct ? <ProductContent add={add} product={oneProduct} btnVal={btnVal} />
            : <DataTable data={product} add={add} edit={edit} deleteOne={deleteProduct} />}
        </>
    )
}

export default Product;

