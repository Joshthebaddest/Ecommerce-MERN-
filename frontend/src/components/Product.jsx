import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
import axios from "../api/axios";
import { useStateContext } from "../context/useStateContext";


const Product = ({ btnText }) => {
    const navigate = useNavigate()
    const { product, addToCart} = useStateContext()
    const [ data, setData ] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null)

    useEffect(()=>{
        if(product.length >= 1){
            setData(true)
        }
    }, [product])


    const click = (id, name) => {
        const title = name.replace(' ', '-')
        navigate(`/shop/${ id }/${title}`);
    }



    return (
        <>
        {data &&
            <section className="my-14 text-center">
                <h1 className="text-4xl font-bold pb-10">Our Products</h1>
                <div className="products grid grid-cols-1 text-left md:grid-cols-2 lg:grid-cols-3">
                    {product.map((item)=>(
                        <div className="item-contents my-5" key={item._id}>
                            <div className="shadow w-[300px] h-[350px] m-auto relative" onMouseEnter={()=>setHoveredItem(item)} onMouseLeave={()=>setHoveredItem(null)}>
                                <div className="item-info w-full text-center" id={item._id}>
                                    <img className="w-auto h-64" src={item.images[0]} alt="" />
                                    <p className="capitalize text-lg font-bold">{item.productName}</p>
                                    <p className="font-bold">${item.price}</p>
                                    <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                                </div>
                                
                                {hoveredItem && hoveredItem._id == item._id && (  
                                <div>
                                    <div className={`w-full h-full bg-white absolute top-0 opacity-95`}></div>
                                    <div className={`w-full h-full ${btnText === 'Shop' ? 'py-[180px]' : 'py-[100px]' } px-[40px] absolute top-0`}>
                                    {btnText !== 'Shop' && <button id={item._id} className="mb-3 rounded-full bg-red-700" onClick={()=>addToCart(item._id)}>{ btnText }</button>}
                                    <button id={item._id} className="mt-0 rounded-full bg-black" onClick={()=>click(item._id, item.productName)}>Buy Now</button>
                                    </div>
                                </div>)}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        }
        </>
    )
}

export default Product;