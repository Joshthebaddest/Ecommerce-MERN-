import Product from "../components/Product";
import Banner from "../components/home/Banner";
import Testimonial from "../components/home/Testimonial";
import useFetch from "../hooks/useFetch";
import { useEffect,useState } from "react";

const Home = () => {
    return(
        <>
            <Banner />
            <Product btnText={'Shop'}/>
            <Testimonial />
        </>
    )

}

export default Home;