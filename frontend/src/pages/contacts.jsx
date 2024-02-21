import { useState } from "react";

const Contacts = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log('submitted')
    }

    return(
        <>
            <div className="mt-10 mb-32 px-5 md:px-20 lg:p-0">
                <div className="p-10 border border-solid md:max-w-[1000px] m-auto flex flex-col lg:flex-row rounded-lg shadow">
                    <div className="lg:w-1/2 pt-10 p-5">
                        <h2 className="text-3xl font-bold m-2">Get In Touch</h2>
                        <p className="text-sm m-2 my-4">We are here for you! How can we help?</p>
                        <form action="" className="text-center " onSubmit={handleSubmit}>
                            <div className="input-container">
                                <input className="w-full p-3 bg-slate-200 outline-none ring-0" type="text" name="name" id="name" placeholder="Enter Your Name" value={formData.name} onChange={handleInputChange}/>
                            </div>
                            <div className="input-container relative">
                                <input className="w-full p-3 bg-slate-200 outline-none ring-0" type="email" name="email" id="email" placeholder="Enter Your Email Address" value={formData.email} onChange={handleInputChange}/>
                            </div>
                            <div className="input-container relative">
                                <textarea className="w-full h-[180px] p-3 bg-slate-200 resize-none outline-none ring-0"  type="text" name="message" id="message" placeholder="Go Ahead. We Are Listening" value={formData.message} onChange={handleInputChange}></textarea>
                            </div>
                            <button type="submit" className="w-full p-3 bg-black text-white rounded-none">Submit <i class="fa-solid fa-arrow-right"></i></button>
                        </form>
                    </div>
                    <div className="h-full lg:w-1/2 p-8 flex flex-col">
                        <img className="h-[300px] mb-5 border-solid border" src="" alt="" />
                        <p className="mb-5"><span className="inline-block border border-solid border-black px-4 py-3 rounded-full mr-5 text-lg"><i class="fa-solid fa-phone"></i></span>+234-80-5811-3280</p>
                        <p className="mb-5"><span className="inline-block border border-solid border-black px-5 py-3 rounded-full mr-5 text-lg"><i class="fa-solid fa-location-dot border-solid border-black"></i></span>Oluwakemi Street, Shangisha, Lagos, Nigeria.</p>
                        <p className="mb-5"><span className="inline-block border border-solid border-black px-4 py-3 rounded-full mr-5 text-lg"><i class="fa-solid fa-envelope"></i></span>Okemjoy34@gmail.com</p>
                    </div>
                </div>
            </div>


        </>
    )

}

export default Contacts