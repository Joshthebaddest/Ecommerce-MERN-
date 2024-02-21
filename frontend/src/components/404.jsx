import { Link } from 'react-router-dom'
import { imageList } from '../assets/dummy'

const NotFound = () => {

    return(
        <>
            <div className='text-center px-5 relative pt-12 pb-32'>
                <div className='max-w-[800px] m-auto relative'>
                    <h1 className='text-3xl max-w-[800px] m-auto md:absolute md:left-60 md:top-14'>OOP'S PAGE NOT FOUND</h1>
                    <img className='w-full' src={imageList.src} alt="" />
                    <h1 className='text-3xl max-w-[800px] m-auto md:absolute md:bottom-6'>WE ARE SORRY BUT THE PAGE YOU REQUESTED IS NOT FOUND <Link to='/' className='underline'>GO TO HOMEPAGE</Link></h1>
                </div>
           </div>
        </>
    )
}

export default NotFound