import Product from "../components/Product";
import Banner from "../components/home/Banner";
import Testimonial from "../components/home/Testimonial";
import useFetch from "../hooks/useFetch";
import Carousel from "../components/carousel";

const Home = () => {
    return(
        <>
            <Banner />
            <Product btnText={'Shop'}/>
            <Testimonial />
            <Carousel />
        </>
    )

}

export default Home;