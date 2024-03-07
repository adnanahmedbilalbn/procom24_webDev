import React from 'react'
import Button from 'react-bootstrap/Button';

import { FaArrowRight } from "react-icons/fa";

import img2 from '../../assests/img/web-img-2.png'
import img3 from '../../assests/img/web-img-3.png'


const Services = () => {
    return (
        <div id='services'>
            <div className='row m-16'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div>
                        <img src={img2} />
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 lg:p-16'>
                    <div className=''>
                        <span className='text-lg'>You can</span>
                        <div className='flex my-3 '>
                            <span className='text-pink-500 font-semibold text-3xl pe-2'>Monitor</span>
                            <span className='text-3xl font-semibold'>Payments</span>
                        </div>
                        <p className='text-lg'>View real-time updates on successful payments, refunds and other transaction-related activities.</p>
                        <Button variant='link' className='p-0 my-4 flex items-end no-underline hover:underline hover:text-pink-500 text-lg text-pink-500'>Learn more <FaArrowRight className='ps-2' /></Button>
                    </div>
                </div>
            </div>
            <div className='row m-16'>
                <div className='col-lg-6 col-md-6 col-sm-12 lg:p-16'>
                    <div>
                        <span className='text-lg'>You can</span>
                        <div className='flex my-3'>
                            <span className='text-violet-600 font-semibold text-3xl pe-2'>Manage</span>
                            <span className='text-3xl font-semibold'>Customers</span>
                        </div>
                        <p className='text-lg'>View real-time updates on successful payments, refunds and other transaction-related activities.</p>
                        <Button variant='link' className='p-0 my-4 flex items-end no-underline hover:underline hover:text-violet-600 text-lg text-violet-600'>Learn more <FaArrowRight className='ps-2' /></Button>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div>
                        <img src={img3} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services