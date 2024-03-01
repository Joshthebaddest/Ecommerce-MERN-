import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { images } from '../assets/data';


const  Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isShowing, setIsShowing] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 5000); // Change slide every 5 seconds
    
        return () => clearInterval(intervalId);
      }, []);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };
    return (
        <>
            <div className="relative overflow-hidden w-full border border-solid border-red-800 h-[500px]">
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex items-center justify-between z-10">
                    <button onClick={prevSlide} className="text-white p-2 bg-black bg-opacity-50 rounded-full focus:outline-none">
                    {/* <ChevronLeftIcon className="h-6 w-6" /> */} prev
                    </button>
                    <button onClick={nextSlide} className="text-white p-2 bg-black bg-opacity-50 rounded-full focus:outline-none">
                    {/* <ChevronRightIcon className="h-6 w-6" /> */}
                    next
                    </button>
                </div>
                {images.map((image, index) => (
                    <Transition
                        key={index}
                        show={currentSlide === index}
                        // enter="transition-opacity duration-1000 ease-in-out"
                        // enterFrom="opacity-0"
                        // enterTo="opacity-100"
                        // leave="transition-opacity duration-1000 ease-in-out"
                        // leaveFrom="opacity-100"
                        // leaveTo="opacity-0"
                    >
                        <img src={image.src} width={'800px'} height={'500px'} alt={`Slide ${index + 1}`} className="object-cover" />
                    </Transition>
                ))}
            </div>

        </>
    );
}

export default Carousel

