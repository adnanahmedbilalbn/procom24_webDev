import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {RiWallet2Fill} from 'react-icons/ri'

const SignupForm = () => {
    return (
        <div className='xl:mx-16'>
            <div className=' flex align-middle justify-center text-center py-4'>
                <span className='text-2xl text-cyan-400 pe-2'><RiWallet2Fill /></span>
                <span className='font-bold'>CustomerPortal</span>
            </div>
            <div className='my-3 text-center'>
                <h3 className='p-3 text-3xl font-semibold'>Create</h3>
                <h3 className='py-3 text-3xl font-bold'><span className='text-cyan-400'>Customer Portal</span> account</h3>
            </div>
            <Form>
                <Form.Group className="mb-4" controlId="username">
                    <Form.Label className='font-bold'>Username</Form.Label>
                    <Form.Control required className='bg-light' type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="accountNumber">
                    <Form.Label className='font-bold'>Acccount Number</Form.Label>
                    <Form.Control required className='bg-light' type="number" placeholder="Enter your account number" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="emailAddress">
                    <Form.Label className='font-bold'>Email Address</Form.Label>
                    <Form.Control required className='bg-light' type="email" placeholder="abc@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="accountNumber">
                    <Form.Label className='font-bold'>Phone Number</Form.Label>
                    <div className='flex'>

            <Form.Select aria-label="Default select example" className='bg-gray-100 border-none'>
              <option>+92</option>
              <option value="1">+99</option>
              <option value="2">+474</option>
              <option value="3">+111</option>
            </Form.Select>
                    <Form.Control required className='bg-light flex-auto' type="number" placeholder="0123456789" />
                    </div>
                </Form.Group>




                <Form.Group className="mb-4" controlId="password">
                    <Form.Label className='font-bold'>Password</Form.Label>
                    <Form.Control required className='bg-light' type="password" placeholder="Enter at least 8+ characters" />
                </Form.Group>
                <Form.Group className="mt-5 d-grid">
                    <Button type='submit' size='lg' className='border-none sign-in-btn bg-cyan-400 hover:bg-cyan-400 text-white font-bold text-xl py-2 shadow-xl'>Sign up</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignupForm