import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { FaRegCheckCircle } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

const Pricing = () => {
    return (
        <div id='pricing' className='w-4/5 mx-auto my-8'>
            <div className='text-center text-4xl font-bold p-4'>Pricing</div>
            <div className='flex lg:flex-nowrap flex-wrap justify-around'>
                <Card className='border-none bg-light lg:px-5 px-3 m-2'>
                    <Card.Body className='text-center'>
                        <Card.Title className='font-bold text-2xl p-2'>PERSONAL</Card.Title>
                        <Card.Text>Perfect for side or hobby projects</Card.Text>
                        <div className='flex items-center justify-center p-4'>
                            <span className='text-3xl font-bold pe-2'>4%</span>
                            <span className='text-sm'>Service fee / Payment</span>
                        </div>
                        <div className='my-2 mb-4'>
                            <div className='flex items-center p-2'><FaRegCheckCircle className='text-violet-500' /><span className='ps-2 text-sm'>Process Unlimited Payments</span></div>
                            <div className='flex items-center p-2'><FaRegCheckCircle className='text-violet-500' /><span className='ps-2 text-sm'>Activate Three Business Services</span></div>
                            <div className='flex items-center p-2'><FaTimes /><span className='ps-2 text-sm'>Analyze And Predict Financial Trends</span></div>
                        </div>
                        <Card.Link href='#' className='text-violet-600'>Get Started</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='border-violet-600 border-2 bg-gray-100 lg:px-5 px-3 m-2'>
                    <Card.Body className='text-center p-0'>
                        <div className='bg-violet-600 rounded-b-lg w-1/2 mx-auto text-white text-center text-sm pb-1'>Popular</div>
                        <Card.Title className='font-bold text-violet-600 text-2xl p-2'>START UP</Card.Title>
                        <Card.Text>Perfect for small teams</Card.Text>
                        <div className='flex items-center justify-center p-4'>
                            <span className='text-3xl font-bold pe-2'>5%</span>
                            <span className='text-sm'>Service fee / Payment</span>
                        </div>
                        <div className='my-2'>
                            <div className='flex items-center p-2'><FaRegCheckCircle className='text-violet-500' /><span className='ps-2 text-sm'>Process Unlimited Payments</span></div>
                            <div className='flex items-center p-2'><FaRegCheckCircle className='text-violet-500' /><span className='ps-2 text-sm'>Activate Three Business Services</span></div>
                            <div className='flex items-center p-2'><FaTimes /><span className='ps-2 text-sm'>Analyze And Predict Financial Trends</span></div>
                        </div>
                        <div className="d-grid gap-2 py-4">
                            <Button className='bg-violet-600 hover:bg-violet-600 border-none'>
                                Get Started
                            </Button>
                        </div>
                    </Card.Body>
                </Card>

                <Card className='border-none bg-light lg:px-5 px-3 m-2'>
                    <Card.Body className='text-center'>
                        <Card.Title className='font-bold text-2xl p-2'>ORGANIZATION</Card.Title>
                        <Card.Text>Perfect for organizations</Card.Text>
                        <div className='flex items-center justify-center p-4'>
                            <span className='text-3xl font-bold pe-2'>$150</span>
                            <span className='text-sm'>/ Month</span>
                        </div>
                        <div className='my-2'>
                            <div className='flex items-center p-2'><FaRegCheckCircle className='text-violet-500' /><span className='ps-2 text-sm'>Process Unlimited Payments</span></div>
                            <div className='flex items-center p-2'><FaRegCheckCircle className='text-violet-500' /><span className='ps-2 text-sm'>Activate Three Business Services</span></div>
                            <div className='flex items-center p-2'><FaRegCheckCircle className='text-violet-500' /><span className='ps-2 text-sm'>Analyze And Predict Financial Trends</span></div>
                        </div>
                        <div className="d-grid gap-2 py-4">
                            <Button className='flex items-center justify-center text-violet-600 hover:text-violet-600 bg-white hover:bg-white border-violet-600'>
                            <FaRegEnvelope className='me-2'/>  Contact Sale
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Pricing