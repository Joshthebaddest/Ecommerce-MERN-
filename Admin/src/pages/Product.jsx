import { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider";
import DataTable from "../components/DataTable";
import { ProductContent } from "../components";
import useFetch from "../hooks/useFetch";
import axios from "axios";


const Product = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [filterBy, setFilterBy] = useState('');
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
  
    // Function to handle sorting by price
    const handleSortByPrice = () => {
      if (sortBy === 'price-asc') {
        setSortBy('price-desc');
      } else {
        setSortBy('price-asc');
      }
    };
  
    // Function to filter products by category
    const handleFilterByCategory = (category) => {
      setFilterBy(category);
    };
  
    // Function to filter products by search term
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    // Filter products based on search term
    const filteredProducts = product?.filter((item) =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

  
    // Sort products based on selected sorting option
    let sortedProducts;
    if(filteredProducts){
        sortedProducts = filteredProducts?.sort((a, b) => {
        if (sortBy === 'price-asc') {
            return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        } else if (sortBy === 'price-desc') {
            return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        } else {
            return 0;
        }
        });
    }
  
    // Filter products based on selected category
    const filteredAndSortedProducts = filterBy
      ? sortedProducts.filter((product) => product.category === filterBy)
      : sortedProducts;

    return(
        <>
            {!updatedProduct ? <ProductContent add={add} product={oneProduct} btnVal={btnVal} />
            : <DataTable data={product} sortBy={sortBy} filteredAndSortedData={filteredAndSortedProducts} handleFilterByCategory={handleFilterByCategory} handleSearch={handleSearch} handleSortByPrice={handleSortByPrice} add={add} edit={edit} deleteOne={deleteProduct} filteredProducts={filteredProducts} />}
        </>
    )
}

export default Product;

