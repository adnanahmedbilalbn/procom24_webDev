import React from 'react'
import Button from 'react-bootstrap/Button';

import { FaArrowRight } from "react-icons/fa";


const Services = () => {
    return (
        <div id='services'>
            <div className='row m-16'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div></div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 p-16'>
                    <div>
                        <span className='text-lg'>You can</span>
                        <div className='flex my-3'>
                            <span className='text-pink-500 font-semibold text-3xl pe-2'>Monitor</span>
                            <span className='text-3xl font-semibold'>Payments</span>
                        </div>
                        <p className='text-lg'>View real-time updates on successful payments, refunds and other transaction-related activities.</p>
                        <Button variant='link' className='p-0 my-4 flex items-end no-underline hover:underline hover:text-pink-500 text-lg text-pink-500'>Learn more <FaArrowRight className='ps-2' /></Button>
                    </div>
                </div>
            </div>
            <div className='row m-16'>
                <div className='col-lg-6 col-md-6 col-sm-12 p-16'>
                    <div>
                        <span className='text-lg'>You can</span>
                        <div className='flex my-3'>
                            <span className='text-purple-700 font-semibold text-3xl pe-2'>Manage</span>
                            <span className='text-3xl font-semibold'>Customers</span>
                        </div>
                        <p className='text-lg'>View real-time updates on successful payments, refunds and other transaction-related activities.</p>
                        <Button variant='link' className='p-0 my-4 flex items-end no-underline hover:underline hover:text-purple-700 text-lg text-purple-700'>Learn more <FaArrowRight className='ps-2' /></Button>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default Services