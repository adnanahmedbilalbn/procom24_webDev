import React from "react";
import Button from 'react-bootstrap/Button';
import img1 from '../../assests/img/web-img-1.png'

const Banner = () => {
    return (
        <div className="bg-violet-600 row web-row">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className='lg:w-4/5 m-auto xl:px-20 py-8 ps-4'>
                <h2 className='font-bold text-white text-4xl m-6 leading-relaxed'>Optimize business payments</h2>
                <p className='text-white text-lg m-6'>Payment processing platform that facilitates transactions between business and their customers</p>
                <Button variant="light" className='bg-white font-semibold hover:text-violet-600 text-violet-600 m-4 px-4'>Open account</Button>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                <img src={img1} />
            </div>

        </div>
    )
}

export default Banner