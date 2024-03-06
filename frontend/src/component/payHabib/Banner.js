import React from "react";
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        <div className="bg-purple-700">
            <div className="col-lg-6 col-md-6 col-sm-12 p-20">
                <div className='w-4/5 m-auto'>
                <h2 className='font-bold text-white text-4xl m-6 leading-relaxed'>Optimize business payments</h2>
                <p className='text-white text-lg m-6'>Payment processing platform that facilitates transactions between business and their customers</p>
                <Button variant="light" className='bg-white font-semibold hover:px-5 hover:text-xl hover:text-purple-700  text-purple-700 m-4 px-4'>Open account</Button>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12"></div>

        </div>
    )
}

export default Banner