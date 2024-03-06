import React from 'react'
import Form from 'react-bootstrap/Form';
import {RiWallet2Fill} from 'react-icons/ri'

const LoginForm = () => {
    return (
        <div className=''>
            <div className=' flex align-middle justify-center text-center py-4'>
                <span className='text-2xl text-purple-700 pe-2'><RiWallet2Fill /></span>
                <span className='font-semibold'>PayHabib</span>
            </div>
            <div className='my-3 text-center'>
                <h3 className='p-3 text-3xl font-semibold'>Login</h3>
                <h3 className='p-3 text-3xl font-semibold'><span className='text-purple-700'>PayHabib</span> account</h3>
            </div>
            <Form>
                <Form.Group className="mb-4" controlId="username">
                    <Form.Label className='font-bold'>Username</Form.Label>
                    <Form.Control required className='bg-light' type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="password">
                    <Form.Label className='font-bold'>Password</Form.Label>
                    <Form.Control required className='bg-light' type="password" placeholder="Enter at least 8+ characters" />
                </Form.Group>
                <Form.Group className="mt-5">
                    <Form.Control className='bg-purple-700 text-white font-bold text-2xl py-2 shadow-xl' type="button" value="Sign up" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default LoginForm