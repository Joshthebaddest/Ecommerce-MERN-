import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useStateContext } from "../context/useStateContext";
import { Breadcrumb } from '../components'
import { imageList } from '../assets/dummy'


const ProductContent = () => {
    // const navigate = useNavigate()
    const { id, name } = useParams()
    const [isActive, setIsActive] = useState(false)
    const [isClass, setIsClass] = useState(false)
    const [imgSrc, setImgSrc] = useState(imageList.img1)
    const [productItem, setProductItem] = useState(null)
    const { product , addToCart} = useStateContext()
    const [breadcrumb, setBreadcrumb] = useState(null)
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };
  
    const decrement = () => {
        if(count <= 1 ) return setCount(1)
        setCount(count - 1);
    };


    useEffect(()=>{
        if(product.length > 0){
            const oneProduct = product.find(item => item._id == id);
            setProductItem([oneProduct])
            setBreadcrumb([
                { label: 'Home', url: '/' },
                { label: 'shop', url: '/shop' },
                { label: oneProduct.productName }
            ])
        }
    },[product])


    const toggleActive = () =>{
        setIsActive(!isActive)
    }
    const toggleClass = () =>{
        setIsClass(!isClass)
    }
    const setImg = (e) => {
        setImgSrc(e.target.src)
        console.log(imgSrc)
    }

    return(
        <> 
            
            {productItem && 
                <div>
                {productItem.map((item)=>(
                <div className="md:flex pb-20" key={item._id}>
                    <div className="md:w-3/5 p-6 md:pl-20">
                        <Breadcrumb items={breadcrumb} />
                        <img src={imgSrc} alt="" className="w-full h-[400px]"/>
                        <div className="flex">
                            <img src={imageList.img1} alt="" className="w-[80px] h-[80px] my-5 ml-3 cursor-pointer" onClick={setImg} />
                            <img src={imageList.img2} alt="" className="w-[80px] h-[80px] my-5 ml-3 cursor-pointer" onClick={setImg} />
                            <img src={imageList.img3} alt="" className="w-[80px] h-[80px] my-5 ml-3 cursor-pointer" onClick={setImg} />
                            <img src="" alt="" className="w-[80px] h-[80px] my-5 ml-3 cursor-pointer" onClick={setImg}/>
                        </div>
                    </div>
                    <div className="md:w-2/5 p-6 md:pt-14 md:pr-20 ">
                        <h2 className="text-3xl my-2">${item.price}</h2>
                        <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                        <h1 className="text-black font-bold text-3xl my-2 capitalize">{item.productName}</h1>
                        <p>{item.description}.</p>
                        <div className="flex mt-5">
                            <div className="border-solid border-2 py-2 w-2/5 flex">
                                <button className="w-1/3" onClick={decrement}>-</button>
                                <span className="text-center block w-1/3">{count}</span>
                                <button className="w-1/3" onClick={increment}>+</button>
                            </div>
                            <button className="text-center w-3/5 p-2 rounded-none ml-5 border-2 border-solid" onClick={()=>{addToCart(item._id, count)}}>Add to Cart</button>
                        </div>
                        <button className="text-center rounded-none w-full mt-5 p-2 border-2 border-solid">Buy Now</button>
                        <p className="mt-5">Share:
                            <a href=""><i className="fa-brands fa-x-twitter ml-8 mx-3"></i></a>
                            <a href=""><i className="fa-brands fa-instagram mx-3"></i></a>
                            <a href=""><i className="fa-brands fa-facebook mx-3"></i></a>
                        </p>
                        <div className="border-solid border-2 mt-5 rounded border-black p-2 w-full flex">
                            <p>We accept:</p>
                        </div>
                        <div>
                            <div className="cursor-pointer my-5" onClick={toggleClass}>
                                <p className="flex justify-between">Details <i className={`fa-solid ${isClass ? 'fa-minus': 'fa-plus'} `}></i></p>
                                <p></p>
                                <p className={`ml-3 mt-3 text-sm ${isClass ? 'block': 'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sit.</p>
                            </div>
                            <div className="cursor-pointer" onClick={()=>toggleActive()}>
                                <p className="flex justify-between">Shipping & Returns<i className={`fa-solid ${isActive ? 'fa-minus': 'fa-plus'} `}></i></p>
                                <p className={`ml-3 mt-3 text-sm ${isActive ? 'block': 'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sit.</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>}
        </>
    )

}

export default ProductContent;